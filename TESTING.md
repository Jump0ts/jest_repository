# Testing Guide

## Estructura de Tests

Este proyecto utiliza Jest y React Testing Library para las pruebas. La estructura está organizada de la siguiente manera:

```
src/
├── __tests__/              # Directorio principal de tests
│   ├── components/         # Tests de componentes React
│   ├── utils/             # Tests de funciones utilitarias
│   ├── integration/       # Tests de integración
│   └── e2e/              # Tests end-to-end (opcional)
├── __mocks__/             # Mocks globales y de módulos
└── setupTests.ts          # Configuración global de Jest
```

## Convenciones de Nomenclatura

- **Unit Tests**: `ComponentName.test.tsx` o `functionName.test.ts`
- **Integration Tests**: `Feature.integration.test.tsx`
- **E2E Tests**: `UserJourney.e2e.test.ts`

## Tipos de Tests

### 1. Tests Unitarios
- **Ubicación**: `src/__tests__/components/` y `src/__tests__/utils/`
- **Propósito**: Probar componentes y funciones de forma aislada
- **Ejemplos**: Counter.test.tsx, mathUtils.test.ts

### 2. Tests de Integración
- **Ubicación**: `src/__tests__/integration/`
- **Propósito**: Probar la interacción entre múltiples componentes
- **Ejemplos**: App.integration.test.tsx

### 3. Mocks
- **Ubicación**: `src/__mocks__/`
- **Propósito**: Simular dependencias externas y APIs
- **Ejemplos**: globalMocks.ts, apiMocks.ts

## Comandos Útiles

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm test -- --watchAll

# Ejecutar tests con cobertura
npm test -- --coverage

# Ejecutar tests específicos
npm test Counter.test.tsx

# Ejecutar tests en modo silencioso
npm test -- --silent
```

## Mejores Prácticas

### Para Componentes React:
1. **Usar data-testid** para elementos que necesitas seleccionar en tests
2. **Probar comportamiento**, no implementación
3. **Usar queries accesibles** (getByRole, getByLabelText, etc.)
4. **Simular interacciones de usuario** con fireEvent o userEvent

### Para Funciones Utilitarias:
1. **Probar casos límite** (arrays vacíos, valores null/undefined)
2. **Probar diferentes tipos de entrada**
3. **Usar describe/test** para organizar los casos de prueba

### Para Tests de Integración:
1. **Probar flujos completos de usuario**
2. **Minimizar el uso de mocks**
3. **Verificar que los componentes trabajen juntos correctamente**

## Herramientas Incluidas

- **Jest**: Framework de testing
- **React Testing Library**: Utilidades para testing de React
- **@testing-library/jest-dom**: Matchers adicionales para Jest
- **@testing-library/user-event**: Simulación de eventos de usuario más realista

## Configuración de Coverage

Para ver la cobertura de código, ejecuta:
```bash
npm test -- --coverage --watchAll=false
```

Los reportes se generarán en la carpeta `coverage/`.