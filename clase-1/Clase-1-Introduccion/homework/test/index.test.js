import { describe, expect, it, vi } from "vitest"
import {
  suma,
  resta,
  multiplicacion,
  iguales,
  calcularAreaTriangulo,
  manipularObjetoBasico,
  manipularArregloBasico,
  splitString,
} from ".."

describe("Clase-1-Introduccion/homework", () => {
  describe("suma", () => {
    it("debería sumar dos números", () => {
      expect(suma(1, 2)).toBe(3)
      expect(suma(5, 5)).toBe(10)
      expect(suma(10, 10)).toBe(20)
    })
  })

  describe("resta", () => {
    it("debería restar dos números", () => {
      expect(resta(1, 2)).toBe(-1)
      expect(resta(5, 5)).toBe(0)
      expect(resta(10, 10)).toBe(0)
    })
  })

  describe("multiplicacion", () => {
    it("debería multiplicar dos números", () => {
      expect(multiplicacion(1, 2)).toBe(2)
      expect(multiplicacion(5, 5)).toBe(25)
      expect(multiplicacion(10, 10)).toBe(100)
    })
  })

  describe("iguales", () => {
    it("debería verificar si dos números son iguales", () => {
      expect(iguales(1, 2)).toBe(false)
      expect(iguales(5, 5)).toBe(true)
      expect(iguales(10, 10)).toBe(true)
    })
  })

  describe("calcularAreaTriangulo", () => {
    it("debería calcular el área de un triángulo", () => {
      expect(calcularAreaTriangulo(1, 2)).toBe(1)
      expect(calcularAreaTriangulo(5, 5)).toBe(12.5)
      expect(calcularAreaTriangulo(10, 10)).toBe(50)
    })
  })
  describe("manipularObjetoBasico", () => {
    it("debería manipular un objeto básico en JavaScript", () => {
      expect(manipularObjetoBasico()).toHaveProperty("categoria")
      expect(manipularObjetoBasico()).not.toHaveProperty("cantidad")
    })
  })
  describe("manipularArregloBasico", () => {
    it("debería manipular un arreglo básico en JavaScript", () => {
      expect(manipularArregloBasico()).toContain("manzana")
      expect(manipularArregloBasico()).not.toContain("tomate")
      expect(manipularArregloBasico()).toContain("uva")
    })
  })

  describe("splitString", () => {
    it("debería dividir un string en un arreglo", () => {
      expect(splitString("hola mundo")).toEqual(["hola", "mundo"])
      expect(splitString("hola mundo, como estas")).toEqual([
        "hola",
        "mundo,",
        "como",
        "estas",
      ])
    })
  })
})
