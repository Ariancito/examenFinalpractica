<template>
    <q-page>
      <q-list bordered>
        <q-item
          v-for="usuario in usuarios"
          :key="usuario.id"
        >
          <q-item-section>
            <q-item-label>{{ usuario.nombre }} {{ usuario.apellido }}</q-item-label>
            <q-item-label caption>{{ usuario.correo }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-page>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        usuarios: []
      };
    },
    mounted() {
      // Llamada a la API para obtener la lista de usuarios al cargar la página
      this.fetchUsuarios();
    },
    methods: {
      async fetchUsuarios() {
        try {
          // Aquí debes reemplazar 'URL_DE_TU_API' con la URL real de tu API para obtener la lista de usuarios
          const response = await axios.get('URL_DE_TU_API');
  
          // Asigna los datos de la respuesta a la variable 'usuarios'
          this.usuarios = response.data;
        } catch (error) {
          // Maneja los errores de la API según tus necesidades
          console.error('Error al obtener la lista de usuarios:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos específicos para este componente si es necesario */
  </style>
  