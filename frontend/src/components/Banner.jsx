function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row gap-2">
        <div className="order-2 w-full md:order-1 md:w-1/2  mt-12 md:mt-32">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              repellat iure{" "}
              <span className="text-pink-500">
                fugit fuga exercitationem atque repellendus
              </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              reiciendis sequi repellat impedit. Asperiores libero reiciendis
              dolores maiores animi nostrum delectus amet necessitatibus debitis
              impedit voluptates, atque officiis? Cumque, porro?
            </p>
            <div>
              <label className="input input-bordered flex items-center gap-2 mr-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Username" />
              </label>
              <button className="btn btn-active btn-secondary mt-7 ">
                Secondary
              </button>
            </div>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2 mt-12 md:mt-32 ">
          <div className="flex justify-center items-center ">
            <img src="src/assets/book.avif" alt="" srcset="" className=" img" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
