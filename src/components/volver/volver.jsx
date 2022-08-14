import "./volver.scss";

function Volver(){
    return (
        <button type="submit" className="volver">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 16V25C17 25.2652 17.1054 25.5196 17.2929 25.7071C17.4804 25.8946 17.7348 26 18 26C18.2652 26 18.5196 25.8946 18.7071 25.7071C18.8946 25.5196 19 25.2652 19 25V16C19 15.7348 18.8946 15.4804 18.7071 15.2929C18.5196 15.1054 18.2652 15 18 15C17.7348 15 17.4804 15.1054 17.2929 15.2929C17.1054 15.4804 17 15.7348 17 16Z" fill="black"/>
                <path d="M24 18C24.1316 18.0008 24.2621 17.9755 24.3839 17.9258C24.5057 17.876 24.6166 17.8027 24.71 17.71C24.8037 17.617 24.8781 17.5064 24.9289 17.3846C24.9797 17.2627 25.0058 17.132 25.0058 17C25.0058 16.868 24.9797 16.7373 24.9289 16.6154C24.8781 16.4936 24.8037 16.383 24.71 16.29L18.71 10.29C18.617 10.1963 18.5064 10.1219 18.3846 10.0711C18.2627 10.0203 18.132 9.9942 18 9.9942C17.868 9.9942 17.7373 10.0203 17.6154 10.0711C17.4936 10.1219 17.383 10.1963 17.29 10.29L11.29 16.29C11.1017 16.4783 10.9959 16.7337 10.9959 17C10.9959 17.2663 11.1017 17.5217 11.29 17.71C11.4783 17.8983 11.7337 18.0041 12 18.0041C12.2663 18.0041 12.5217 17.8983 12.71 17.71L18 12.41L23.29 17.71C23.3834 17.8027 23.4943 17.876 23.6161 17.9258C23.7379 17.9755 23.8684 18.0008 24 18Z" fill="black"/>
            </svg>
            <span>
                subir
            </span>
        </button>
    );
}

export default Volver;