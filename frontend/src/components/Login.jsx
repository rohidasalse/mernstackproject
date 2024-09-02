import React from "react";
function Login() {
  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Login
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 ">
                ✕
              </button>
            </form>
            <div>
              <h3 className="font-bold text-lg">Login</h3>

              <div>
                <div>
                  <span>Name</span>
                  <input type="text" />
                </div>
                <div>
                  <span>Password</span>
                  <input type="password" id="password" />
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
export default Login;
