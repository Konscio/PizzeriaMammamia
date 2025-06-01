import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div
        className="card shadow-sm"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="card-header bg-dark text-white text-center py-3">
          <h2 className="mb-0">Mi Perfil</h2>
        </div>

        <div className="card-body p-4 text-center">
          <div className="mb-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
              alt="Avatar"
              className="rounded-circle border border-primary"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
          </div>

          <div className="mb-4">
            <h3 className="h4 mb-2">{user?.name || "Usuario"}</h3>
            <p className="text-muted mb-0">
              <i className="bi bi-envelope-fill me-2"></i>
              {user?.email || "usuario@ejemplo.com"}
            </p>
          </div>
        </div>

        <div className="card-footer bg-white border-0 pb-4 px-4">
          <button
            onClick={handleLogout}
            className="btn btn-danger w-100 d-flex align-items-center justify-content-center gap-2"
          >
            <i className="bi bi-box-arrow-right"></i>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
