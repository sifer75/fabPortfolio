function CompetenceCard({ src, title }: { src: string; title: string }) {
  return (
    <div className="rounded-xl flex items-center gap-2 w-max h-fit p-2 border-2 border-black bg-slate-100">
      <img src={src} alt="logo" className="w-5 xs:w-7 h-5 xs:h-7"></img>
      <span className="text-black text-sm xs:text-lg sm:text-xl lg:text-lg">
        {title}
      </span>
    </div>
  );
}

export default CompetenceCard;
