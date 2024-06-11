import { Metadata } from "next"
import TermAndConditionsTemplate from "@modules/tyc/templates/index"

export const metadata: Metadata = {
    title: "Terminos y Condiciones",
    description: "Terminos y condiciones de la web.",
  }

const termsAndConditionsPage = ( ) => {

    return (
        <TermAndConditionsTemplate />
    )
}

export default termsAndConditionsPage;