function MainContent({ children, titulo }) {
  return (
    <main id="main-content" role="main" tabIndex="-1" className="main_content">
      
      <section aria-labelledby="main-section-title" className="w-full max-w-7xl text-center">
      
        {/* Título principal opcional*/}
        { titulo && ( <h1 id="main-section-title" className="font-heading-h1 main_section__title"> {titulo} </h1> ) }

        {children}

      </section>

    </main>
  );
}

export default MainContent;

    // <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8">
    //   {children}
    // </div>