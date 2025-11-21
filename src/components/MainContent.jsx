function MainContent({ children }) {
  return (
    <main id="main-content" role="main" tabIndex="-1" className="main_content">
      
      {/* El aria-labelledby coincide con el título principal que mostrarán las páginas en children*/}
      <section aria-labelledby="main-section-title" className="w-full max-w-7xl text-center">
      
        {children}

      </section>

    </main>
  );
}

export default MainContent;
