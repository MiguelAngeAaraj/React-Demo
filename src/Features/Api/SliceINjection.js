import { createEntityAdapter } from '@reduxjs/toolkit'
import { GymSlice } from './ApiSlice'

import BodyPart from '../../assets/icons/body-part.png'
import Target from '../../assets/icons/target.png'
import Equipment from '../../assets/icons/equipment.png'

const GymAdapter = createEntityAdapter()

const Headers = {
  GymHeader: {
    'X-RapidAPI-Key': 'c084169fdcmsh0c76371a9890701p1c7f8cjsnefa19406312d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
}

export const InitialGymAdapter = GymAdapter.getInitialState({
  AllData: [],
  BodyParts: [],
  ChangeTheme: 'All',
  Data: {},
  YoutubeVideo: {},
  TargetMuscles: [],
  Equipment: [],
})

export const InjectGymSlice = GymSlice.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => ({
        url: '/exercises',
        headers: Headers.GymHeader,
      }),
      transformResponse: (res) => {
        console.log(res)
        InitialGymAdapter.AllData = res.map((data) => ({
          ...data,
          id: data.id,
        }))
      },
    }),
    GetParts: builder.query({
      query: () => ({
        url: '/exercises/bodyPartList',
        headers: Headers.GymHeader,
      }),
      transformResponse: (res) => {
        const FirstElem = res[0]
        res[0] = 'All'
        InitialGymAdapter.BodyParts = [...res, FirstElem]
      },
    }),
    GetExercise: builder.query({
      query: (id) => ({
        url: `/exercises/exercise/${id}`,
        headers: Headers.GymHeader,
      }),
      transformResponse: (res) => {
        if (res) {
          const Container = {}
          const ContainerImages = [
            {
              Icon: BodyPart,
              name: res.bodyPart,
            },
            {
              Icon: Target,
              name: res.target,
            },
            {
              Icon: Equipment,
              name: res.equipment,
            },
          ]
          InitialGymAdapter.Data = {
            ...Container,
            name: res.name,
            gifUrl: res.gifUrl,
            equipment: res.equipment,
            id: res.id,
            target: res.target,
            DetailsIcons: ContainerImages,
          }
        } else {
          InitialGymAdapter.Data = 0
        }
      },
    }),
    GetYoutubeVideos: builder.query({
      query: (Name) => ({
        url: `https://youtube-search-and-download.p.rapidapi.com/search?query=${Name} exercise`,
        headers: {
          'X-RapidAPI-Key':
            '2345120e3dmsh7bd35fa61bcb241p1c0bcdjsnc5e4cada7aad',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        },
      }),
      transformResponse: (res) => {
        InitialGymAdapter.YoutubeVideo = res
      },
    }),
    GetTargetMuscle: builder.query({
      query: (Target) => ({
        url: `/exercises/target/${Target}`,
        headers: Headers.GymHeader,
      }),
      transformResponse: (res) => {
        InitialGymAdapter.TargetMuscles = res
      },
    }),
    GetEquipmentExercise: builder.query({
      query: (Eqt) => ({
        url: `/exercises/equipment/${Eqt}`,
        headers: Headers.GymHeader,
      }),
      transformResponse: (res) => {
        InitialGymAdapter.Equipment = res
      },
    }),
  }),
})

export const {
  useGetDataQuery,
  useGetPartsQuery,
  useGetExerciseQuery,
  useGetYoutubeVideosQuery,
  useGetTargetMuscleQuery,
  useGetEquipmentExerciseQuery,
} = InjectGymSlice
/* const GetDataSelection = InjectGymSlice.endpoints.getData.select()
const SelectDataBodyParts = InjectGymSlice.endpoints.GetParts.select()
const SelectorGymData = createSelector(
  GetDataSelection,
  (GymData) => GymData.data,
)
export const { selectAll: SelectGymData } = GymAdapter.getSelectors(
  (state) => SelectorGymData(state) ?? InitialGymAdapter,
) */
