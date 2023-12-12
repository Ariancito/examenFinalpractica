<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-input v-model="nombre" label="Nombre" />
      <q-input v-model="apellido" label="Apellido" />
      <q-input v-model="correo" label="Correo electrónico" type="email" />
      <q-input v-model="contrasena" label="Contraseña" type="password" />
      
      <q-btn type="submit" label="Registrar" color="primary" />
    </q-form>
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      contrasena: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        // Aquí debes reemplazar 'URL_DE_TU_API' con la URL real de tu API de registro
        const response = await axios.post('URL_DE_TU_API', {
          nombre: this.nombre,
          apellido: this.apellido,
          correo: this.correo,
          contrasena: this.contrasena
        });

        // Aquí puedes manejar la respuesta de la API según tus necesidades
        console.log('Registro exitoso:', response.data);
      } catch (error) {
        // Aquí puedes manejar los errores de la API
        console.error('Error al registrar:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos para este componente si es necesario */
</style>
