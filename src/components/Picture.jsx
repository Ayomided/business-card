import portrait from '/Users/davidayomide/Documents/dev/businessCard/business-card/src/assets/potrait.jpg'

function Picture() {
  return (
    <div className=" flex justify-center">
      <img
        src={portrait}
        alt="potrait"
        className="m-auto rounded-t-lg w-72"
      />
    </div>
  )
}

export default Picture