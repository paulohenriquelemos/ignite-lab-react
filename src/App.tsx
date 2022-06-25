import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./Router"


/*
yarn create vite . --template react-ts
yarn
yarn add tailwindcss postcss autoprefixer -D
npx tailwindcss init -p

https://graphcms.com/
rseat.in/lab-graphcms

yarn add @apolo/client graphql

yarn add date-fns para estilizar a data em padrões que quisermos

// entrar nesse site para instalar a lib para usar o reprodutor de vídeo
http://vimejs.com
yarn add @vime/core @vime/react
// esse import serve para padronizar o css o reprodutor de vídeo (sempre usar
com esse reprodutor se não o visual dele fica todo estranho)
import '@vime/core/themes/default.css'

yarn add react-router-dom

yarn add react-youtube // precisa desinstalar

yarn add react-player // precisa desinstalar

yarn add classnames

https://www.graphql-code-generator.com/

yarn add @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo -D
yarn add @graphql-codegen/cli -D
yarn codegen

*/
function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
