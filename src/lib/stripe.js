import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TfqiaARe0KNGpIGDJRLoIGl',
    'seeker_premium': 'price_1TfqiEARe0KNGpIGqgdIyPcY',
    'recruiter_growth': 'price_1TfqhdARe0KNGpIG63i67Js6',
    'recruiter_enterprise': 'price_1Tfqh8ARe0KNGpIGaEjKssq4'
}