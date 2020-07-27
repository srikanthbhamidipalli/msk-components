import propertyTypes from 'msk-property-types'
import themes from 'msk-themes'

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.midnightBlue,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Skill Set',
    required: true
  },
  skills: {
    name: 'Skills',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Skill',
        id: '3da7f2ce-4ed6-4de7-bd58-f42c51008f8d',
        type: propertyTypes.OBJECT,
        required: true,
        name: {
          name: 'Skill',
          type: propertyTypes.STRING,
          value: 'Skill 1',
          required: true
        },
        rating: {
          name: 'rating',
          type: propertyTypes.NUMBER,
          value: 1.5,
          required: true
        }
      },
      {
        name: 'Skill',
        id: 'e7282751-dd0d-4a5d-bfb4-b2b2018faec8',
        type: propertyTypes.OBJECT,
        required: true,
        name: {
          name: 'Skill',
          type: propertyTypes.STRING,
          value: 'Skill 2',
          required: true
        },
        rating: {
          name: 'rating',
          type: propertyTypes.NUMBER,
          value: 4,
          required: true
        }
      },
      {
        name: 'Skill',
        id: '5621be5c-b4bf-4fc8-8459-5574a7220e27',
        type: propertyTypes.OBJECT,
        required: true,
        name: {
          name: 'Skill',
          type: propertyTypes.STRING,
          value: 'Skill 3',
          required: true
        },
        rating: {
          name: 'rating',
          type: propertyTypes.NUMBER,
          value: 5,
          required: true
        }
      }
    ],
    required: true
  }
}

export default properties
