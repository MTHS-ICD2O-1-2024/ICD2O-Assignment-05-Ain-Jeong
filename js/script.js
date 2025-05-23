// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: May 2025
// This file contains the JS functions for index.html

'use-strict'

/**
 * This function calculates exponents
 */
// eslint-disable-next-line no-unused-vars
function calculateExponent () {
  let counter = 0
  let answer = 1

  // input
  const baseNumber = parseFloat(document.getElementById('base-number').value)
  const exponentNumber = parseFloat(
    document.getElementById('exponent-number').value
  )

  // process
  while (counter < exponentNumber) {
    counter = counter + 1
    answer = answer * baseNumber
  }
  // output
  document.getElementById('answer').innerHTML =
    baseNumber + ' to the power of ' + exponentNumber + ' is: ' + answer + '.'
}
