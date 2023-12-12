<template>
    <q-page>
      <q-form @submit="submitForm">
        <q-input v-model="correo" label="Correo electrónico" type="email" />
        <q-input v-model="contrasena" label="Contraseña" type="password" />
        
        <q-btn type="submit" label="Iniciar sesión" color="primary" />
      </q-form>
    </q-page>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        correo: '',
        contrasena: ''
      };
    },
    methods: {
      async submitForm() {
        try {
          // Aquí debes reemplazar 'URL_DE_TU_API' con la URL real de tu API de inicio de sesión
          const response = await axios.post('URL_DE_TU_API', {
            correo: this.correo,
            contrasena: this.contrasena
          });
  
          // Aquí puedes manejar la respuesta de la API según tus necesidades
          console.log('Inicio de sesión exitoso:', response.data);
  
          // Puedes redirigir a otra página después del inicio de sesión exitoso
          this.$router.push('/dashboard');
        } catch (error) {
          // Aquí puedes manejar los errores de la API
          console.error('Error al iniciar sesión:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos específicos para este componente si es necesario */
  </style>
  