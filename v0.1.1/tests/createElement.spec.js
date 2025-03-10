import React from '../core/React'
import { it, expect, describe } from 'vitest'

describe('createElement', () => {
    it('props is null', () => {
        const el = React.createElement('div', null, "hi")

        expect(el).toMatchInlineSnapshot(`
          {
            "props": {
              "children": [
                {
                  "props": {
                    "children": [],
                    "nodeValue": "hi",
                  },
                  "type": "TEXT_ELEMENT",
                },
              ],
            },
            "type": "div",
          }
        `)
    })

    it('should return element vdom', () => {
        const el = React.createElement('div', { id: "id" }, "hi")

        expect(el).toMatchInlineSnapshot(`
          {
            "props": {
              "children": [
                {
                  "props": {
                    "children": [],
                    "nodeValue": "hi",
                  },
                  "type": "TEXT_ELEMENT",
                },
              ],
              "id": "id",
            },
            "type": "div",
          }
        `)
    })
})