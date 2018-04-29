const ColorView = ({ color, selectedColor, handlePaperColor }) => (
  <div className="product-details__color-container">
    <p>Color</p>
    <div className="product-details__color-list">
      {color.map(singleColor => (
        <div
          style={{
            border:
              selectedColor === singleColor
                ? `1px solid ${convertColorName(selectedColor)}`
                : "1px solid #fff"
          }}
          key={singleColor}
        >
          <div
            style={{ backgroundColor: convertColorName(singleColor) }}
            className="square-color"
            onClick={() => handlePaperColor(singleColor)}
          />
        </div>
      ))}
    </div>
  </div>
);

// export default WithColor(ColorView);