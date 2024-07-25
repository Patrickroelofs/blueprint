function PreReleaseBanner(): JSX.Element {
  return (
    <div
      className="fixed top-0 z-10 w-96 rounded-br-full border-l-4 border-red-500 bg-red-100 bg-opacity-75 p-4 opacity-75 backdrop-blur-md"
      role="alert"
    >
      <p className="pb-2 font-bold">Pre-release</p>
      <p className="pr-8 text-sm">
        This project is not yet ready for use, it is subject to change and
        behaviours breaking.
      </p>
    </div>
  );
}

export { PreReleaseBanner };
