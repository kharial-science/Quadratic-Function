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
                            "Pour tout nombre réels x et k, on a:", 
                            "x² + kx = (x + k/2)²-(k/2)²"
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
                        "content": "Soit f la fonction polynôme définie sur l'ensemble réel par f(x) = ax² + bx + c avec a, b et c des réels et a ≠ 0\nOn factorise par le coefficient a:\na(x² + (b/a)x + c/a)\nOn considère x² + (b/a)x comme le début du développement de (x+b/2a)²\nx² + (b/a)x = (x + b/2a)² - (b/2a)²\nx² + (b/a)x = (x + b/2a)² - b²/4a²\nD'où:\nf(x) = a[(x + b/2a)² - b²/4a² + c/a]\nf(x) = a[(x + b/2a)² - b²/4a² + 4ac/4a²]\nf(x) = a[(x + b/2a)² - (b² - 4ac)/4a²\nPosons Δ = b² - 4ac]\nOn a alors:\nf(x) = a[(x + b/2a)² - Δ/4a²]\f(x) = na(x + b/2a)² - Δ/4a\nf(x) = a(x - (-b/2a))² + -Δ/4a\nPosons α = -b/2a et β = -Δ/4a\nOn obtient:\nf(x) = a(x-α)² + β"
                    },
                    {
                        "ParagraphTitle": "Remarque",
                        "content": "f(x) = a(x-α)² + β\nAlors:\nf(α) = a(α-α) + β\nf(α) = β"
                    },
                    {
                        "ParagraphTitle": "Exemples",
                        "content": "Ecrire chacun des polynômes suivants sous la forme canonique:\nA(x) = x² + x - 1\nA(x) = (x + 2)² - 5\n\nB(x) = 2x² - 4x - 6\nB(x) = 2[(x-1)²+2]\nB(x) = 2(x-1)² + 4\n\nC(x) = -x² + 2x + 5\nC(x) = -1[(x-1)²-6]\nC(x) = -(x-1)² + 6\n D(x) = 3x² - x + 1\nD(x) = 3[x - x/3 + 1/3]\nD(x) = 3[(x - 1/6)² + 11/36]\nD(x) = 3(x-1/6)² + 11/12"
                    }
                ]
            }
        ]
    }
]

export default LessonJSON