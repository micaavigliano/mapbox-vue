## Ceres Imaging

# FrontEnd Engineer Candidate Screening

### About the assignment

- There's no right or wrong way to complete this challenge - we want to see how you solve problems!
- You can spend as much time as you need to complete this, but we don't want to take up too much of your time. Solving every problem isn't mandatory.
- You can run the project locally or you can use Docker. If you use Docker please add the Dockerfile.
- Code styling is important - you can use Prettier or any other option.
- A basic scaffold application with Vue/Vuetify app is available. If you don't feel comfortable with Vue, you can start from scratch with React or any other toolset.
- You can use any tool/library that makes your work faster/easier.

### How to do it

1. Fork the repo
1. Do your magic
1. Push to your fork
1. Create a PR to upstream

### Tasks

1. Create a form in the sidebar to submit filters to the source endpoint including: `starttime`, `endtime` and `minmagnitude`
1. Circle radius must be relative to the earthquake magnitude
1. Add a Popup to the map to show info about clicked point including: `place`, `magnitude` and `time`

![screenshot](https://user-images.githubusercontent.com/360260/120043690-cabf9780-bfe2-11eb-8771-8e5e79f025f7.png)

### Docs

- [USGS API](https://earthquake.usgs.gov/fdsnws/event/1/#parameters)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/)
- [Vue Mapbox](https://vue-mapbox-gl.meta.fr/)
