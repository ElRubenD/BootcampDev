import { describe, expect, it } from "vitest"
import {
  menosQueNoventa,
  esImpar,
  esVocal,
  puedePasar,
  fizzBuzz,
  retornarGanador,
  sumarTodos,
  esPrimo,
  factorial,
  fibonacci,
} from ".."

describe("Clase 2 - Homework", () => {
  describe("menosQueNoventa", () => {
    it("Deberia retornar true si el numero es menor a 90", () => {
      expect(menosQueNoventa(89)).toBe(true)
    })

    it("Deberia retornar false si el numero es mayor a 90", () => {
      expect(menosQueNoventa(91)).toBe(false)
    })
  })

  describe("esImpar", () => {
    it("Deberia retornar true si el numero es impar", () => {
      expect(esImpar(3)).toBe(true)
    })

    it("Deberia retornar false si el numero es par", () => {
      expect(esImpar(4)).toBe(false)
    })
  })

  describe("esVocal", () => {
    it("Deberia retornar 'Es vocal' si la letra es una vocal", () => {
      expect(esVocal("a")).toBe("Es vocal")
    })

    it("Deberia retornar 'Dato incorrecto' si la letra no es una vocal", () => {
      expect(esVocal("b")).toBe("Dato incorrecto")
    })

    it("Deberia retornar 'Dato incorrecto' si la letra no es una vocal", () => {
      expect(esVocal("ab")).toBe("Dato incorrecto")
    })
  })

  describe("puedePasar", () => {
    it("Deberia retornar 'Es mayor de edad, puede pasar' si el numero es mayor o igual a 18", () => {
      expect(puedePasar(18)).toBe("Es mayor de edad, puede pasar")
    })

    it("Deberia retornar 'No puede pasar' si el numero es menor a 18", () => {
      expect(puedePasar(17)).toBe("No puede pasar")
    })

    it("Deberia retornar 'Dato incorrecto' si el numero es menor a 0", () => {
      expect(puedePasar(-1)).toBe("Dato incorrecto")
    })
  })

  describe("fizzBuzz", () => {
    it("Deberia retornar 'fizz' si el numero es divisible entre 3", () => {
      expect(fizzBuzz(3)).toBe("fizz")
      expect(fizzBuzz(6)).toBe("fizz")
    })

    it("Deberia retornar 'buzz' si el numero es divisible entre 5", () => {
      expect(fizzBuzz(5)).toBe("buzz")
      expect(fizzBuzz(10)).toBe("buzz")
    })

    it("Deberia retornar 'fizzbuzz' si el numero es divisible entre 3 y 5", () => {
      expect(fizzBuzz(15)).toBe("fizzbuzz")
      expect(fizzBuzz(30)).toBe("fizzbuzz")
    })

    it("Deberia retornar el numero si no es divisible entre 3 ni 5", () => {
      expect(fizzBuzz(7)).toBe(7)
    })
  })

  describe("retornarGanador", () => {
    it("Deberia retornar el nombre del participante seleccionado en el sorteo", () => {
      expect(retornarGanador(["a", "b", "c"], 1)).toBe("b")
    })

    it("Deberia retornar 'No hay participantes' si el numero es mayor a la cantidad de participantes", () => {
      expect(retornarGanador(["a", "b", "c"], 5)).toBe("No hay participantes")
    })
  })

  describe("sumarTodos", () => {
    it("Deberia retornar la suma total de todos los numeros", () => {
      expect(sumarTodos([1, 2, 3])).toBe(6)
      expect(sumarTodos([5, 10, 20])).toBe(35)
    })
  })

  describe("esPrimo", () => {
    it("Deberia retornar true si el numero es primo", () => {
      expect(esPrimo(2)).toBe(true)
      expect(esPrimo(3)).toBe(true)
      expect(esPrimo(5)).toBe(true)
      expect(esPrimo(7)).toBe(true)
    })

    it("Deberia retornar false si el numero no es primo", () => {
      expect(esPrimo(0)).toBe(false)
      expect(esPrimo(1)).toBe(false)
      expect(esPrimo(4)).toBe(false)
      expect(esPrimo(6)).toBe(false)
      expect(esPrimo(8)).toBe(false)
    })
  })

  describe("factorial", () => {
    it("Deberia retornar el factorial del numero", () => {
      expect(factorial(5)).toBe(120)
      expect(factorial(6)).toBe(720)
    })
  })

  describe("fibonacci", () => {
    it("Deberia retornar el enesimo numero de la secuencia de Fibonacci", () => {
      expect(fibonacci(2)).toBe(1)
      expect(fibonacci(5)).toBe(3)
      expect(fibonacci(8)).toBe(13)
    })
  })
})
