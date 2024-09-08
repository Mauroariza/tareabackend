import { useForm, FieldError } from 'react-hook-form';
import instance from '../api/axios';
import 'tailwindcss/tailwind.css'; // Asegúrate de tener Tailwind CSS configurado

interface SignUpFormData {
  username: string;
  password: string;
}

const SignUpPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>();

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await instance.post('/auth/register', data);
      // Redirigir al usuario a la página de inicio de sesión
    } catch (error) {
      console.error('Error al registrar', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Registrarse</h2>
        <div className="mb-4">
          <input 
            {...register('username', { required: 'El nombre de usuario es obligatorio' })} 
            placeholder="Nombre de usuario" 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.username && (errors.username as FieldError).message && <p className="text-red-500 text-sm mt-1">{(errors.username as FieldError).message}</p>}
        </div>
        <div className="mb-4">
          <input 
            {...register('password', { required: 'La contraseña es obligatoria' })} 
            type="password" 
            placeholder="Contraseña" 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.password && (errors.password as FieldError).message && <p className="text-red-500 text-sm mt-1">{(errors.password as FieldError).message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Registrarse</button>
      </form>
    </div>
  );
};

export default SignUpPage;