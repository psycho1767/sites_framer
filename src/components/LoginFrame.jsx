export default function LoginFrame() {
  return (
    <div className="flex justify-center items-center gap-3">
      <button className="text-[1.125rem] text-matn/60 cursor-pointer">Log in</button>
      <button className="text-[1.125rem]  duration-300 px-3 py-1.5 text-white shadow-[var(--shadow-logBtn-sm),var(--shadow-logBtn-md),var(--shadow-logBtn-lg),var(--shadow-logBtn-xl)] font-semibold bg-linear-to-r from-cirBlueTop to-linerBlue rounded-xl cursor-pointer ">
        Sign Up
      </button>
    </div>
  );
}
