import { StyleSheet } from 'react-native';

export const colores = {
  fondo: '#2C2C2C',
  primario: '#D4AF37',
  secundario: '#8B0000',
  texto: '#E0E0E0',
  boton: '#4A4A4A',
  botonSeleccionado: '#D4AF37',
  blanco: '#FFFFFF',
  gris: '#808080',
};

export const estilosComunes = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontFamily: 'Cinzel_Bold', // Asegúrate de que la fuente esté correctamente asignada
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontFamily: 'Cinzel_Bold',
    fontSize: 22,
    color: colores.botonSeleccionado,
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 5 },
    textShadowRadius: 10,
  },
  boton: {
    backgroundColor: colores.boton,
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colores.primario,
    width: '48%',
    alignItems: 'center', // Centra el contenido horizontalmente
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 10,
    width: 40,
    height: 40,
  },
  botonSeleccionado: {
    backgroundColor: colores.botonSeleccionado,
  },
  textoBoton: {
    fontFamily: 'Cinzel_Bold',
    color: colores.texto,
    textAlign: 'center',
    fontSize: 16,
  },
  textoBotonSeleccionado: {
    color: colores.fondo,
    fontFamily: 'Cinzel_Bold',
  },
    imagenFondo: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Cinzel_Bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  button: {
    backgroundColor: '#1A1A1A',

    borderColor: '#FFD700',
    width: '48%', // Ajusta esto según cuántas tarjetas quieras por fila
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#FFD700',
    fontSize: 18,
    fontFamily: 'Cinzel',
    textAlign: 'center',
  },
});