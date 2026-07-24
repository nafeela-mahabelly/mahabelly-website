// ────────────────────────────────────────────────────────────────
//  Legal policies — content supplied by the client (Fenn & Jacob
//  Associates LLP). Effective / last-updated dates to be confirmed
//  before launch, along with the named Grievance Officer and vendors.
// ────────────────────────────────────────────────────────────────

export interface Block {
  h?: string
  p?: string
  list?: string[]
}

export interface Policy {
  slug: string
  title: string
  metaTitle: string
  metaDesc: string
  intro: string
  blocks: Block[]
}

const ENTITY_INTRO =
  'For these policies, “Mahabelly”, “we”, “us” or “our” refers to Fenn & Jacob Associates LLP, which operates Mahabelly and Mahabelly Canteen outlets and the websites www.mahabelly.com, www.mahabelly.shop and www.mahabelly.co.'

export const PRIVACY: Policy = {
  slug: 'privacy',
  title: 'Privacy Policy',
  metaTitle: 'Privacy Policy | Mahabelly',
  metaDesc: 'How Mahabelly (Fenn & Jacob Associates LLP) collects, uses, shares and protects your personal data.',
  intro: 'Mahabelly respects your privacy and is committed to handling your personal data responsibly, securely and transparently.',
  blocks: [
    { h: '1. Information We Collect', p: 'Depending on how you interact with us, we may collect:', list: [
      'your name, mobile number, email address and delivery address;',
      'order details, transaction history, preferences and feedback;',
      'payment status and transaction references received from payment providers;',
      'loyalty programme, rewards and promotional preferences;',
      'communications with our customer support team;',
      'device, browser, IP address, cookie and website usage information; and',
      'any information you voluntarily provide through reservations, catering enquiries, feedback forms, contests or other interactions.',
    ] },
    { p: 'We do not ordinarily store complete debit card, credit card, UPI PIN or banking credentials. Payments are processed by authorised third-party payment service providers.' },
    { h: '2. How We Use Your Information', p: 'We may process your personal data to:', list: [
      'accept, prepare, deliver and manage your orders;',
      'process payments, refunds, cancellations and customer support requests;',
      'administer reservations, catering enquiries and loyalty benefits;',
      'communicate order updates and service-related information;',
      'send offers and marketing communications where you have consented or where otherwise permitted by law;',
      'personalise and improve our website, menu, services and customer experience;',
      'prevent fraud, misuse and security incidents;',
      'maintain business, tax and transaction records; and',
      'comply with legal, regulatory and contractual obligations.',
    ] },
    { p: 'Where processing is based on consent, you may withdraw your consent at any time. Withdrawal will not affect processing already undertaken lawfully.' },
    { h: '3. Sharing of Personal Data', p: 'We may share limited personal data with persons who assist us in providing our services, including:', list: [
      'payment gateways and banks;',
      'delivery and logistics partners;',
      'website, point-of-sale, ordering, CRM, loyalty and cloud-service providers;',
      'customer communication and marketing service providers;',
      'professional advisers, auditors and insurers; and',
      'government, regulatory or law-enforcement authorities where required by law.',
    ] },
    { p: 'These parties may process personal data only for the relevant service or lawful purpose. We do not sell or rent your personal data. Orders placed through third-party platforms such as food aggregators are also governed by the privacy policies of those platforms.' },
    { h: '4. Cookies and Analytics', p: 'Our website may use cookies and similar technologies to maintain website functionality, remember preferences, analyse usage and improve performance. You may restrict cookies through your browser settings; disabling certain cookies may affect website functionality. Where legally required, non-essential cookies will be used only after obtaining your consent.' },
    { h: '5. Marketing Communications', p: 'We may send offers, updates and promotional messages where you have opted in or where permitted by applicable law. You may opt out at any time by using the unsubscribe facility provided in the communication or by contacting us. You may continue to receive essential communications relating to existing orders, transactions or customer-service requests.' },
    { h: '6. Children’s Personal Data', p: 'Our website and online ordering services are intended to be used by adults. We do not knowingly create accounts for, or directly market to, children without appropriate parental or guardian involvement. Where personal data of a child is required to be processed, we will obtain verifiable consent from the parent or lawful guardian where required by applicable law.' },
    { h: '7. Data Retention', p: 'We retain personal data only for as long as reasonably necessary to fulfil the purposes described in this policy, provide services requested by you, maintain transaction, accounting and tax records, resolve disputes and complaints, and comply with legal and regulatory obligations. Personal data that is no longer required will be deleted, anonymised or securely archived, subject to applicable law.' },
    { h: '8. Data Security', p: 'We use reasonable technical and organisational safeguards to protect personal data against unauthorised access, disclosure, alteration, loss or misuse. However, no website, electronic transmission or storage system can be guaranteed to be completely secure. You should protect your device, passwords and account information and immediately inform us of suspected unauthorised use. Where required by law, we will notify affected individuals and the relevant authority of a personal-data breach.' },
    { h: '9. Your Rights', p: 'Subject to applicable law, you may request:', list: [
      'information about the personal data processed by us;',
      'correction or updating of inaccurate or incomplete personal data;',
      'erasure of personal data that is no longer required;',
      'withdrawal of consent;',
      'redressal of a grievance concerning personal-data processing; and',
      'nomination of another person to exercise your rights in the event of death or incapacity.',
    ] },
    { p: 'We may request reasonable information to verify your identity before acting on a request.' },
    { h: '10. International Processing', p: 'Some technology or cloud-service providers may process or store information outside India. Where this occurs, we will take reasonable steps to ensure that the processing is undertaken in accordance with applicable Indian law and any restrictions prescribed by the Government of India.' },
    { h: '11. Third-Party Websites', p: 'Our website may contain links to third-party websites, payment pages, delivery platforms or social-media services. Their handling of personal data is governed by their own terms and privacy policies. We are not responsible for the privacy practices of independent third parties.' },
    { h: '12. Grievance and Privacy Contact', p: 'For privacy questions, consent withdrawal, rights requests or grievances, contact the Privacy and Grievance Officer, Fenn & Jacob Associates LLP, Mahabelly Canteen, Ground Floor, Plot No. 05, Kh. No. 264, Westend Marg, Saidulajab, New Delhi – 110030. Email: connect@mahabelly.com · Phone: +91 9017906907. We will acknowledge and address grievances within the period prescribed under applicable law or, where no period is prescribed, within a reasonable time.' },
    { h: '13. Changes to This Policy', p: 'We may update this Privacy Policy to reflect changes in law, technology or our business practices. The revised policy will be published on this page with an updated effective date. Material changes may also be communicated through other appropriate means.' },
  ],
}

export const TERMS: Policy = {
  slug: 'terms',
  title: 'Terms and Conditions',
  metaTitle: 'Terms & Conditions | Mahabelly',
  metaDesc: 'The terms governing your access to Mahabelly’s website and orders placed directly through it.',
  intro: 'These Terms and Conditions govern your access to www.mahabelly.com and orders placed directly through Mahabelly’s website(s) or ordering interface(s). By accessing the website or placing an order, you agree to these Terms and Conditions.',
  blocks: [
    { h: '1. Eligibility', p: 'You must be legally capable of entering into a binding contract under Indian law. Where an order is placed on behalf of another person, you confirm that you have authority to provide the relevant delivery and contact details.' },
    { h: '2. Website Information', p: 'We endeavour to keep menu descriptions, prices, images, availability and other information accurate. However:', list: [
      'photographs are illustrative and actual presentation may vary;',
      'ingredients, portion sizes, packaging and availability may change;',
      'prices may vary between outlets, ordering channels and locations; and',
      'typographical or technical errors may occasionally occur.',
    ] },
    { p: 'We may correct errors and update information at any time.' },
    { h: '3. Orders and Acceptance', p: 'Submission of an order constitutes an offer to purchase. An order is accepted only when it is confirmed by us or the relevant outlet begins processing it. We may reject or cancel an order where an item is unavailable; the delivery address is outside the serviceable area; payment is unsuccessful or cannot be verified; the information provided is inaccurate; there is a pricing or technical error; the order appears fraudulent or abusive; or circumstances beyond our reasonable control prevent fulfilment. Where payment has been collected for an order cancelled by us, the applicable amount will be refunded.' },
    { h: '4. Prices, Taxes and Charges', p: 'The total amount payable, including applicable taxes, packaging, delivery or other charges, will be displayed before checkout. Prices and charges may be changed prospectively without notice. A price change will not ordinarily affect an order already accepted, except where there is an obvious pricing or technical error.' },
    { h: '5. Payment', p: 'Payments may be processed through third-party payment service providers, whose additional terms may apply. An order is not confirmed merely because an amount has been debited. Where payment is debited but the order is not confirmed, the amount will be reconciled or refunded in accordance with the payment provider’s timelines. You must use a payment method that you are authorised to use.' },
    { h: '6. Food Allergies and Dietary Requirements', p: 'Menu descriptions may not identify every ingredient or allergen. Our kitchens handle dairy, nuts, gluten, seafood, eggs and other common allergens, and we cannot guarantee the absence of traces or cross-contact. Customers with serious allergies or dietary restrictions should contact the relevant outlet before ordering. Any information provided must not be treated as medical advice or an absolute guarantee of an allergen-free preparation.' },
    { h: '7. Promotions and Loyalty Benefits', p: 'Discounts, coupons, cashback, Mahabelly Gold benefits and promotional offers are subject to their stated validity, eligibility and redemption conditions; may not be combined unless expressly permitted; have no cash value unless specifically stated; may be restricted by outlet, product, date, customer or ordering channel; and may be withdrawn or modified prospectively. Benefits obtained through fraud, duplication, system manipulation or misuse may be cancelled.' },
    { h: '8. Customer Responsibilities', p: 'You agree to provide accurate contact, delivery and payment information; remain available at the delivery address and contact number; inspect the order promptly upon receipt; use the website only for lawful purposes; and not interfere with the website, impersonate another person, misuse offers, make fraudulent claims or attempt unauthorised access.' },
    { h: '9. Intellectual Property', p: 'The Mahabelly name, logos, menu names, designs, photographs, illustrations, text and website content are owned by or licensed to us. They may not be copied, reproduced, modified, commercially exploited or used to imply endorsement without prior written permission.' },
    { h: '10. Third-Party Services', p: 'Orders placed through third-party aggregators, marketplaces or delivery platforms are also governed by their respective terms, payment policies, cancellation rules and privacy policies. We are not responsible for the independent acts, systems or policies of such third-party platforms, except to the extent responsibility cannot legally be excluded.' },
    { h: '11. Availability and Website Access', p: 'We may suspend or restrict access to the website for maintenance, security, operational or technical reasons. We do not guarantee uninterrupted or error-free access.' },
    { h: '12. Limitation of Liability', p: 'To the extent permitted by law, Mahabelly will not be liable for indirect, incidental or consequential loss arising from website downtime, third-party systems, customer-provided information or circumstances beyond our reasonable control. Nothing in these Terms excludes or limits liability that cannot lawfully be excluded, including liability arising from fraud, wilful misconduct, food-safety obligations or statutory consumer rights.' },
    { h: '13. Force Majeure', p: 'We will not be responsible for delay or non-performance caused by events beyond our reasonable control, including severe weather, traffic restrictions, accidents, strikes, public emergencies, governmental action, utility failure, network disruption or supply shortages. Where appropriate, we will endeavour to offer cancellation, replacement, credit or refund based on the circumstances.' },
    { h: '14. Governing Law and Jurisdiction', p: 'These Terms are governed by the laws of India. Subject to applicable consumer-protection law and the jurisdiction of competent consumer commissions, courts at New Delhi will have jurisdiction over disputes arising from direct use of the website or orders placed through it.' },
    { h: '15. Grievance Redressal', p: 'For order, payment or website-related grievances, contact the Grievance Officer, Fenn & Jacob Associates LLP. Email: connect@mahabelly.com · Phone: +91 9017906907. Please provide your name, registered mobile number, order number and a brief description of the issue. We will acknowledge and address complaints within the timelines required under applicable law.' },
  ],
}

export const CANCELLATION: Policy = {
  slug: 'cancellation-refund',
  title: 'Cancellation and Refund Policy',
  metaTitle: 'Cancellation & Refund Policy | Mahabelly',
  metaDesc: 'Mahabelly’s cancellation and refund terms for orders placed directly through our website.',
  intro: 'This policy applies to orders placed directly through Mahabelly’s website. Orders placed through third-party platforms are additionally subject to the cancellation and refund policies of those platforms.',
  blocks: [
    { h: '1. Customer Cancellations', p: 'You may request cancellation immediately after placing an order. Cancellation will ordinarily be permitted only if the request is received within 60 seconds of placing the order, or the outlet has not accepted the order or started preparation, whichever occurs earlier. As food is prepared specifically for each order, cancellation may not be possible after preparation has started. To request cancellation, call +91 9017906907 immediately and provide your order number.' },
    { h: '2. Cancellation by Mahabelly', p: 'We may cancel an order because of item unavailability; inability to service the delivery location; payment or verification failure; pricing or system error; suspected fraud or misuse; or circumstances beyond our reasonable control. Where payment has been received, the applicable amount will be refunded.' },
    { h: '3. Refund or Replacement Eligibility', p: 'Please contact us promptly where:', list: [
      'the order was not delivered;',
      'an item is missing or materially different from what was ordered;',
      'the food or packaging is damaged, spilled or unsuitable for consumption;',
      'the order is substantially delayed and has not been accepted by you;',
      'you have been charged more than once; or',
      'payment was deducted but no valid order was generated.',
    ] },
    { p: 'Depending on the circumstances, we may offer a replacement, partial refund, full refund, account credit or another appropriate resolution.' },
    { h: '4. Reporting an Issue', p: 'Please report order-related issues within 30 minutes of delivery, wherever reasonably possible. We may request your order number, photographs, packaging details or other reasonable information necessary to investigate the complaint. Failure to provide photographs will not automatically invalidate a genuine complaint where the issue can otherwise be verified. Food-safety concerns should be reported immediately.' },
    { h: '5. Non-Refundable Situations', p: 'A refund may not be available where:', list: [
      'the order was delivered correctly and as described;',
      'delivery failed because the address or contact information was incorrect;',
      'the customer was unavailable despite reasonable delivery attempts;',
      'dissatisfaction relates solely to personal taste or spice preference;',
      'the request is made after an unreasonable delay without supporting information; or',
      'the order was misused, tampered with or partly consumed before an unrelated complaint was raised.',
    ] },
    { p: 'This does not restrict any statutory consumer right or remedy.' },
    { h: '6. Refund Processing', p: 'Once approved, we will initiate the refund within 24 to 48 hours. The amount will ordinarily be returned to the original payment method. Banks and payment providers may take approximately 5 to 7 working days, or such other period prescribed by them, to reflect the refund. Cash-on-delivery refunds, where applicable, may be processed through bank transfer, UPI, store credit or another agreed method. Delivery, packaging or convenience charges may be refunded where the order was cancelled by us, not delivered, or materially defective; otherwise, such charges may be non-refundable.' },
    { h: '7. Contact', p: 'Email: connect@mahabelly.com · Phone: +91 9017906907.' },
  ],
}

export const SHIPPING: Policy = {
  slug: 'shipping-delivery',
  title: 'Shipping and Delivery Policy',
  metaTitle: 'Shipping & Delivery Policy | Mahabelly',
  metaDesc: 'How Mahabelly delivers freshly prepared food within serviceable areas around participating outlets.',
  intro: 'Mahabelly delivers freshly prepared food within serviceable areas surrounding participating outlets.',
  blocks: [
    { h: '1. Serviceability', p: 'Delivery availability depends on the selected outlet; delivery distance and location; operating hours; item availability; delivery-partner availability; and prevailing traffic, weather and operational conditions. We may decline or cancel an order that cannot reasonably be delivered to the stated address.' },
    { h: '2. Delivery Estimates', p: 'Estimated delivery times are indicative and not guaranteed. Most orders are expected to be delivered within approximately 30 minutes to 2 hours, depending on the outlet, order size, location and prevailing conditions. Large, bulk, festive and catering orders may require additional preparation and delivery time.' },
    { h: '3. Delivery Charges', p: 'Any delivery, packaging, handling or platform charges will be displayed before checkout. Charges may vary according to distance, order value, outlet, time and delivery channel.' },
    { h: '4. Customer Availability', p: 'You must provide a complete and accurate address, landmark and active mobile number and remain available to receive the order. Where delivery cannot be completed because the address is incorrect or inaccessible, entry is denied by security or building management, the customer cannot be contacted, or no person is available to receive the order, the order may be returned or treated as delivered after reasonable attempts. A refund may not be available for food already prepared and dispatched.' },
    { h: '5. Delivery Handover', p: 'The order will be treated as delivered when handed over to the customer; a person present at the delivery address; security, reception or another person authorised by the customer; or a designated location requested by the customer. Customers should inspect the packaging at the time of delivery and promptly report visible damage, spillage or missing items.' },
    { h: '6. Delays', p: 'Delivery may be delayed due to traffic, weather, public events, road closures, high order volumes, technical issues or other circumstances beyond our reasonable control. Where an order is substantially delayed, please contact us. Depending on the status of preparation and dispatch, we may provide an update, replacement, credit, cancellation or refund.' },
    { h: '7. Food Quality After Delivery', p: 'For food safety and quality, orders should be consumed promptly or stored appropriately after delivery. We are not responsible for deterioration caused by prolonged storage, delayed consumption, improper reheating or handling after the order has been delivered.' },
    { h: '8. Third-Party Delivery Platforms', p: 'Where delivery is fulfilled through an independent aggregator or logistics provider, their delivery terms may also apply. Complaints may be raised through the relevant platform or directly with us. We will reasonably assist in resolving issues relating to food prepared by Mahabelly.' },
    { h: '9. Bulk and Catering Orders', p: 'Bulk, festive and catering orders may be governed by separately agreed terms concerning advance payment, minimum quantities, delivery windows, setup requirements and cancellation charges. Where separately agreed terms conflict with this policy, the separately agreed terms will prevail.' },
    { h: '10. Delivery Assistance', p: 'Email: connect@mahabelly.com · Phone: +91 9017906907.' },
  ],
}

export const ACCESSIBILITY: Policy = {
  slug: 'accessibility',
  title: 'Accessibility Statement',
  metaTitle: 'Accessibility Statement | Mahabelly',
  metaDesc: 'Mahabelly’s commitment to an accessible website and welcoming outlets for all guests.',
  intro: 'Mahabelly is committed to making our website and our outlets welcoming and usable for everyone, including people with disabilities.',
  blocks: [
    { h: 'Our Approach', p: 'We aim to meet the WCAG 2.2 AA accessibility standard across this website. This includes legible colour contrast, descriptive alternative text for meaningful images, logical heading structure, keyboard-accessible navigation, clearly labelled forms and respect for reduced-motion preferences.' },
    { h: 'At Our Outlets', p: 'Accessibility varies by outlet. For information on step-free access, seating, parking or any assistance you may need, please call us at +91 9017906907 before your visit and we will be glad to help.' },
    { h: 'Ongoing Improvement', p: 'Accessibility is an ongoing effort. We continue to review and improve the website and our services. If you encounter any barrier, or need information in an alternative format, please let us know.' },
    { h: 'Contact', p: 'Email: connect@mahabelly.com · Phone: +91 9017906907. We will do our best to respond and resolve accessibility concerns promptly.' },
  ],
}

export const POLICIES: Policy[] = [PRIVACY, TERMS, CANCELLATION, SHIPPING, ACCESSIBILITY]

export function getPolicy(slug: string) {
  return POLICIES.find((p) => p.slug === slug)
}

export { ENTITY_INTRO }
