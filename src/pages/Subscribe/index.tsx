import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { useCreateSubscriberMutation, useGetSlugQuery } from "../../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  const [createSubscriber, { loading }] = useCreateSubscriberMutation()
  const { data } = useGetSlugQuery()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    if(name.trim().length === 0 || email.trim().length === 0) {
      return alert('Digite Nome e E-mail válidos')
    }
    
    await createSubscriber({
      variables: {
        name,
        email,
      }
    })
    navigate(`/event/lesson/${data?.lessons[0].slug}`)
  }

  return(
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col
      items-center justify-between"
    >
      <div
        className="w-full max-w-[1100px] md:flex items-center justify-between
        mt-6 md:mt-14 mx-auto px-4 gap-6"
      >
        <div
          className="max-w-[640px] flex flex-col items-center justify-center
          text-center mb-8 md:mb-0"
        >
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, 
            com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das 
            tecnologias mais utilizadas e com alta demanda para acessar as 
            melhores oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14 outline-none
                border border-transparent focus:border focus:border-green-500"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 outline-none
              border border-transparent focus:border focus:border-green-500"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />
            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold 
              text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/images/code-mockup.png" className="px-4" alt="Imagem de fundo" />
      <Footer />
    </div>
  )
}
