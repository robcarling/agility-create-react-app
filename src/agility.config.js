//Our Agility Modules
import RichTextArea from './modules/RichTextArea'
import PostsListing from './modules/PostsListing'
import PostDetails from './modules/PostDetails'
import Jumbotron from './modules/Jumbotron'

//Our Agility PageTemplates
import OneColumnTemplate from './pageTemplates/OneColumnTemplate'

export default {
    guid: '75902848-8eb6-4497-916e-45bd7d03b153', //Set your guid here
    fetchAPIKey: 'defaultlive.a96c490cebe49b9ab79151ad70d0d9b8746cf086003a98166eb37331be9bc9e9', //Set your fetch apikey here
    previewAPIKey: 'defaultpreview.54e5ad8700bbdce8224534710f0f5f12eeeeee377ae8c0e132feb77b6429494d', //set your preview apikey
    languageCode: 'en-us',
    channelName: 'website',
    isPreview: false,
    caching: {
        maxAge: 0
    },
    moduleComponents: {
        RichTextArea,
        PostsListing,
        Jumbotron,
        PostDetails
    },
    pageTemplateComponents: {
        OneColumnTemplate
    }
}