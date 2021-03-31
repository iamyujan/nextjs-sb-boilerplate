const Icons = {
  'cart': ({iconClass}) => <svg className={`icon ${iconClass ? `icon--${iconClass}`: ''}`} role="presentation"></svg>
}
const IconSolid = ({ icon, iconClass }) => {
  if (typeof Icons[icon] !== 'undefined') {
    const Icon = Icons[icon]
    return <Icon iconClass={iconClass} />
  }
  return 
}