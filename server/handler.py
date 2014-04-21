#!/usr/bin/env python
#!/usr/bin/python
# -*- coding: utf-8 -*-
import stripe
import cgi

form = cgi.FieldStorage()
# Set your secret key: remember to change this to your live secret key in production
# See your keys here https://manage.stripe.com/account
stripe.api_key = "sk_test_RZkRJdFi3icYHHqxjCM64UR2"

# Get the credit card details submitted by the form
token = form['stripeToken'].value

# Create the charge on Stripe's servers - this will charge the user's card
try:
  charge = stripe.Charge.create(
      amount=1000, # amount in cents, again
      currency="usd",
      card=token,
      description="payinguser@example.com"
  )
except stripe.CardError, e:
  # The card has been declined
  pass

