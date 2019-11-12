import React from 'react'

const LessonJSON = [
    {
        "PartTitle": "I. Polynômes du second degré",
        "content": [
            {
                "SubPartTitle": "1. Définition",
                "content": [
                    {
                        "ParagraphTitle": "Définition",
                        "content": "On appelle fonction du second degré (ou trinôme du second degré) toute fonction f définie sur R par f(x) = ax²+bx+c où a, b et c sont trois nombres réels avec a ≠ 0"
                    }
                ]
            },
            {
                "SubPartTitle": "2. Forme canonique",
                "content": [
                    {
                        "ParagraphTitle": "Méthode de complétion du carré",
                        "content": [
                            "Pour tout nombre réels x et k, on a :", 
                            "formula: x² + kx = (x + k/2)² - (k/2)²"
                        ]
                    },
                    {
                        "ParagraphTitle": "Démonstration",
                        "content": "(x + k/2)² - (k/2)² = x² + kx + (k/2)² - (k/2)²"
                    },
                    {
                        "ParagraphTitle": "Exemples",
                        "content": "Complète: A finir"
                    },
                    {
                        "ParagraphTitle": "Propriété",
                        "content": "Toute fonction polynôme du second degré f définie sur l'ensemble des nombres réels par f(x) = ax² + bx + c où a, b et c sont des réels avec a ≠ 0, peut s'écrire de façon unique sous la forme f(x) = a(x - α) + β où α et β sont deux réels. Cette forme est la forme canonique du polynôme ax² + bx + c."
                    },
                    {
                        "ParagraphTitle": "Démonstration",
                        "content": [
                            "Soit f la fonction polynôme définie sur l'ensemble réel par f(x) = ax² + bx + c avec a, b et c des réels et a ≠ 0",
                        "On factorise par le coefficient a:",
                        "formula: a(x² + (b/a)x + c/a)",
                        "On considère x² + (b/a)x comme le début du développement de (x+b/2a)²",
                        "formula: x² + (b/a)x = (x + b/2a)² - (b/2a)²",
                        "formula: x² + (b/a)x = (x + b/2a)² - b²/4a²",
                        "D'où:",
                        "formula: f(x) = a[(x + b/2a)² - b²/4a² + c/a]",
                        "formula: f(x) = a[(x + b/2a)² - b²/4a² + 4ac/4a²]",
                        "formula: f(x) = a[(x + b/2a)² - (b² - 4ac)/4a²",
                        "Posons Δ = b² - 4ac]",
                        "On a alors:",
                        "formula: f(x) = a[(x + b/2a)² - Δ/4a²]",
                        "formula: f(x) = na(x + b/2a)² - Δ/4a",
                        "formula: f(x) = a(x - (-b/2a))² + -Δ/4a",
                        "Posons α = -b/2a et β = -Δ/4a",
                        "On obtient:",
                        "formula: f(x) = a(x-α)² + β"
                        ]
                    },
                    {
                        "ParagraphTitle": "Remarque",
                        "content": [
                            "f(x) = a(x-α)² + β",
                            "Alors:",
                            "f(α) = a(α-α) + β",
                            "f(α) = β"
                        ]
                    },
                    {
                        "ParagraphTitle": "Exemples",
                        "content": [
                            "Ecrire chacun des polynômes suivants sous la forme canonique:",
                            " ",
                            " ",
                            "formula: A(x) = x² + x - 1",
                            "formula: A(x) = (x + 2)² - 5",
                            " ",
                            "formula: B(x) = 2x² - 4x - 6",
                            "formula: B(x) = 2[(x-1)²+2]",
                            "formula: B(x) = 2(x-1)² + 4",
                            " ",
                            "formula: C(x) = -x² + 2x + 5",
                            "formula: C(x) = -1[(x-1)²-6]",
                            "formula: C(x) = -(x-1)² + 6",
                            " ",
                            "formula: D(x) = 3x² - x + 1",
                            "formula: D(x) = 3[x - x/3 + 1/3]",
                            "formula: D(x) = 3[(x - 1/6)² + 11/36]",
                            "formula: D(x) = 3(x-1/6)² + 11/12"
                        ]
                    }
                ]
            }
        ]
    }
]

export default LessonJSON