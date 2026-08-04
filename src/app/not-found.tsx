import { Button } from "@/components/brand";
import { BASE_PATH } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound__inner">
        <span className="notfound__code">404</span>
        <h1 className="notfound__title">Stránku jsme nenašli</h1>
        <p className="notfound__text">
          Tuhle stránku se nám nepodařilo najít. Možná byla přesunutá nebo už
          neexistuje. Zkuste se vrátit na úvod.
        </p>
        <Button variant="cta" size="lg" href={`${BASE_PATH}/`}>
          Zpět na úvod
        </Button>
      </div>
    </section>
  );
}
