import { LogoFooter } from "../LogoFooter";

export function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-center md:justify-between
      border-t border-gray-600 px-8 py-4 w-full bg-gray-700 gap-6 md:gap-0"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <LogoFooter />
        <span className="text-gray-300">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <span className="text-gray-300 mb-4 md:mb-0">
        Políticas de privacidade
      </span>
    </footer>
  )
}
