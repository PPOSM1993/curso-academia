import { Button } from "@/components/ui/button";
import { Header } from "./components/Header";

/**
 * Render the home page layout containing a header and a primary action button.
 *
 * @returns The page's JSX element with a `Header` component and a `Button` labeled "Boton".
 */
export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Button>Boton</Button>
      </div>
    </>
  );
}