

function App() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/images/benelli_logo.webp"
            alt="Benelli Logo"
            className="w-[400px] max-w-[90vw] h-auto mb-2 drop-shadow-2xl mx-auto"
            style={{ objectFit: 'contain', display: 'block' }}
          />
          <div className="flex h-3 w-40 border border-zinc-800 rounded-sm overflow-hidden">
            <div className="h-full w-1/3 bg-[#004439]"></div>
            <div className="h-full w-1/3 bg-white"></div>
            <div className="h-full w-1/3 bg-[#CC0000]"></div>
          </div>
          <p className="font-montserrat font-normal text-3xl md:text-5xl tracking-wide text-center mt-2 md:mt-6 text-black">
            Próximamente
          </p>
        </div>
      </div>
    </div>
  );
}

export default App
