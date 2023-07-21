import martinreaLogo from "../img/Martinrea-logo.png"

  export default function HeaderBanner({ titleText }) {
    return (
        <div className={`flex w-full items-center px-5 py-3 gap-4`}>
        <img
          className="aspect-auto w-24"
          src={martinreaLogo}
          alt="Martinrea Logo"
        />
        <h1 className="font-semibold text-5xl text-neutral-70">{titleText}</h1>
      </div>
      
    );
  }
  