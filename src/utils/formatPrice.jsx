export default function formatPrice(item, isYearly) {
    const price = isYearly ? item.pricing.yearly : item.pricing.monthly;
    return `$${price}/${isYearly ? 'yr' : 'mo'}`;
 }