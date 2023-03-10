## 3 days challenge from [LensAI](https://www.artofficialintelligence.xyz/) guys :)

# My answer facing the challenge :

I did a lot of errors but it had been a while since I had touched the react so it was a good warmup.

I regret to not have used [react-native-lens-ui-kit](https://github.com/lens-protocol/react-native-lens-ui-kit)
, I wanted to do without it until the end but I think that if I am brought to work again on lens protocol it could have given me an additional knowledge.
So I regained in front that I lost it in time and in knowledge of this package.

I had a lot of fun working on this challenge, I am looking forward to new challenges.

___
# Known bugs/errors/things to rework :
- There is a missing dependencies into the `useEffect()` code inside `LensProfile.js`, `LensPublication.js` and `ExplorePublications.js`. I should include the function which gets the data but I don't want to because I don't want that the state update (and so, launch this function) every time a result is received.
I know this is an "arechitecture" error and it is probably an easy fix but I don't have time to look further currently so I have disabled the eslint rule for it.  
Like this :
```
useEffect(() => {
    loadPublications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [username]);
```
I think this causes a bug that sometimes makes the filter publication change fail on explore publication page

- There are a recurrent error occurring with multiple element without keys inside <InfiniteScroll> tag. Well, I searched and didn't find this element so I will fix this later

- Profile picture : lol, I have very badly handled it, this need to be recoded

- There is still a lot of code that can be divided into further components

___
# Test the dapp :
- you can go directly in local to :
    - Test the explore publications page http://localhost:3000/home
    - Test the profil page http://localhost:3000/user/nader.lens or http://localhost:3000/user/w0xt3r.lens
    - Test the publication page http://localhost:3000/publication/0xbedb-0xa9
___
# Build your first social network  

**Deadline: 24/01/2023**

**You will have to upload the code to a private Github repository and add @w0xter as a member to review the code. **

The goal is to create [a feed like that of LensAI](https://www.artofficialintelligence.xyz/gallery) where you can explore images from the community. The most basic version of this will be to replicate the Community gallery of LensAI where you can explore posts in chronological order or using different filters. After completing the task, you will need to extend the functionality to be able to [view a user's profile](https://www.artofficialintelligence.xyz/user/w0xt3r.lens) and a [post page](https://www.artofficialintelligence.xyz/post/0xbedb-0xd7) with more information such as the description or comments.

What is Lens Protocol?

[Lens Protocol](https://www.lens.xyz/garden) is a decentralized social graph, it can be used to include social interactions within your application. With Lens, you can create a social network easily, add friends, explore feeds, comment and share posts.

How to connect to Lens Protocol?

Connection to Lens Protocol is done through its API, using GraphQL you can communicate with the platform to perform all types of actions. In this case, I have adapted the code so that you do not have to build the connection logic from scratch.

I have created a component called [ExplorePublications](https://github.com/novusmundi/challenge/blob/main/src/components/ExplorePublications.js) with which you can see an example of the configuration and the way to run the query, with this example you should be able to complete the rest of the code necessary to complete the feed view. Keep in mind that you need to create an infinite scroll using the query but modifying the cursor to be able to iterate over the data.

I have created queries for the rest of the necessary components so you should not have any complexity when developing them. If you have any questions, you can [join this Telegram chat](https://t.me/+cJeJKn-DbogyZmI0) to ask your questions.



# Construye tu primera red social  

**Deadline: 24/01/2023**

**Deber??is crear un repositorio privado en github y a??adir a @w0xter como miembro para poder revisar el c??digo.**

El objetivo es crear un [feed como el de LensAI](https://www.artofficialintelligence.xyz/gallery) donde poder explorar las im??genes de la comunidad. La versi??n m??s b??sica de este ser?? replicar la Community gallery de LensAI aqu?? puedes explorar los posts en orden cronol??gico o usando distintos filtros. 
Tras completar tarea deber??is extender las funcionalidades para poder [ver el perfil de un usuario](https://www.artofficialintelligence.xyz/user/w0xt3r.lens) y una [p??gina de post](https://www.artofficialintelligence.xyz/post/0xbedb-0xd7) con m??s informaci??n como la descripci??n o los comentarios. 

??Qu?? es lens protocol?

[Lens Protocol](https://www.lens.xyz/garden) es un social graph descentralizado, se puede usar para incluir interacciones sociales dentro de tu aplicaci??n. Con Lens puedes crear una red social de manera sencilla,a??adir amigos, explorar feeds, comentar y compartir posts. 

??C??mo conectarse a Lens Protocol?


La conexi??n a Lens Protocol se hace a trav??s de su API, usando GraphQL te puedes comunicar con la plataforma para realizar todo tipo de acciones. En esta ocasi??n he adaptado el c??digo para que no teng??is que construir la l??gica de conexi??n desde cero. 

He creado un componente llamado [ExplorePublications](https://github.com/novusmundi/challenge/blob/main/src/components/ExplorePublications.js) con el que podeis ver un ejemplo de la configuraci??n y la forma de ejecutar la query, con este ejemplo deber??is ser capaces de completar el resto del c??digo necesario para completar la vista del feed. Tened en cuenta que hay que crear un infinite scroll usando la query pero modificando el cursor para poder iterar sobre los datos.   
 
He creado queries para el resto de componentes necesarios por lo que no deber??ais tener ninguna complejidad a la hora de desarrollarlos. Si ten??is alguna duda pod??is uniros a [este chat de telegram](https://t.me/+cJeJKn-DbogyZmI0) para hacer vuestras preguntas. 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
