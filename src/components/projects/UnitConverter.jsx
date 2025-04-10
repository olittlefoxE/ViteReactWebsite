import { m } from 'framer-motion';
import { useState } from 'react';

const UNIT_TYPES = {
  temperature: {
    units: ["Celsius", "Fahrenheit", "Kelvin"],
    convert: (value, fromUnit, toUnit) => {
      // Erst zu Celsius konvertieren
      let celsius;
      switch (fromUnit) {
        case "Celsius":
          celsius = value;
          break;
        case "Fahrenheit":
          celsius = (value - 32) * (5 / 9);
          break;
        case "Kelvin":
          celsius = value - 273.15;
          break;
        default:
          return 0;
      }
      
      // Dann von Celsius zur Zieleinheit
      switch (toUnit) {
        case "Celsius":
          return celsius;
        case "Fahrenheit":
          return (celsius * 9/5) + 32;
        case "Kelvin":
          return celsius + 273.15;
        default:
          return 0;
      }
    }
  },
  length: {
    units: ["Kilometer", "Meter", "Decimeter", "Centimeter", "Millimeter", "Mile", "Yard", "Foot", "Inch"],
    convert: (value, fromUnit, toUnit) => {
      // Erst zu Meter konvertieren
      let meters;
      switch (fromUnit) {
        case "Kilometer":
          meters = value * 1000;
          break;
        case "Meter":
          meters = value;
          break;
        case "Decimeter":
          meters = value / 10;
          break;
        case "Centimeter":
          meters = value / 100;
          break;
        case "Millimeter":
          meters = value / 1000;
          break;
        case "Mile":
          meters = value * 1609.344;
          break;
        case "Yard":
          meters = value * 0.9144;
          break;
        case "Foot":
          meters = value * 0.3048;
          break;
        case "Inch":
          meters = value * 0.0254;
          break;
        default:
          return 0;
      }
      
      // Dann von Meter zur Zieleinheit
      switch (toUnit) {
        case "Kilometer":
          return meters / 1000;
        case "Meter":
          return meters;
        case "Decimeter":
          return meters * 10;
        case "Centimeter":
          return meters * 100;
        case "Millimeter":
          return meters * 1000;
        case "Mile":
          return meters / 1609.344;
        case "Yard":
          return meters / 0.9144;
        case "Foot":
          return meters / 0.3048;
        case "Inch":
          return meters / 0.0254;
        default:
          return 0;
      }
    }
  },
  weight: {
    units: ["Ton", "Kilogram", "Gram", "Miligram", "Pound", "Ounce"],
    convert: (value, fromUnit, toUnit) => {
        // Erst zu Kilogramm konvertieren
        let kilograms;
        switch (fromUnit) {
            case "Ton":
            kilograms = value * 1000;
            break;
            case "Kilogram":
            kilograms = value;
            break;
            case "Gram":
            kilograms = value / 1000;
            break;
            case "Milligram":
            kilograms = value / 1000000;
            break;
            case "Pound":
            kilograms = value * 0.45359237;
            break;
            case "Ounce":
            kilograms = value * 0.0283495;
            break;
            default:
            return 0;
        }
        
        // Dann von Kilogramm zur Zieleinheit
        switch (toUnit) {
            case "Ton":
            return kilograms / 1000;
            case "Kilogram":
            return kilograms;
            case "Gram":
            return kilograms * 1000;
            case "Milligram":
            return kilograms * 1000000;
            case "Pound":
            return kilograms / 0.45359237;
            case "Ounce":
            return kilograms / 0.0283495;
            default:
            return 0;
        }
    }
  },
  area: {
    units: ["Square milimeter", "Square centimeter", "Square decimeter", "Square meter", "Hectare", "Acre"],
    convert: (value, fromUnit, toUnit) => {
        // Erst zu Quadratmeter konvertieren
        let squareMeters;
        switch (fromUnit) {
            case "Square milimeter":
            squareMeters = value / 1000000;
            break;
            case "Square centimeter":
            squareMeters = value / 10000;
            break;
            case "Square decimeter":
            squareMeters = value / 100;
            break;
            case "Square meter":
            squareMeters = value;
            break;
            case "Hectare":
            squareMeters = value * 10000;
            break;
            case "Acre":
            squareMeters = value * 4046.86;
            break;
            default:
            return 0;
        }
        
        // Dann von Quadratmeter zur Zieleinheit
        switch (toUnit) {
            case "Square milimeter":
            return squareMeters * 1000000;
            case "Square centimeter":
            return squareMeters * 10000;
            case "Square decimeter":
            return squareMeters * 100;
            case "Square meter":
            return squareMeters;
            case "Hectare":
            return squareMeters / 10000;
            case "Acre":
            return squareMeters / 4046.86;
            default:
            return 0;
        }
    }
  },
  volume: {
    units: ["Cubic millimeter", "Cubic centimeter", "Cubic decimeter","Cubic meter", "Liter", "Milliliter", "Centiliter"],
    convert: (value, fromUnit, toUnit) => {
        // Erst zu Kubikmeter konvertieren
        let cubicMeters;
        switch (fromUnit) {
            case "Cubic millimeter":
            cubicMeters = value / 1000000000;
            break;
            case "Cubic centimeter":
            cubicMeters = value / 1000000;
            break;
            case "Cubic meter":
            cubicMeters = value;
            break;
            case "Liter":
            cubicMeters = value / 1000;
            break;
            case "Milliliter":
            cubicMeters = value / 1000000;
            break;
            default:
            return 0;
        }
        
        // Dann von Kubikmeter zur Zieleinheit
        switch (toUnit) {
            case "Cubic millimeter":
            return cubicMeters * 1000000000;
            case "Cubic centimeter":
            return cubicMeters * 1000000;
            case "Cubic meter":
            return cubicMeters;
            case "Liter":
            return cubicMeters * 1000;
            case "Milliliter":
            return cubicMeters * 1000000;
            default:
            return 0;
        }
    }
  },
    speed: {
      units: ["Kilometer per hour", "Meter per second", "Mile per hour", "Foot per second"],
      convert: (value, fromUnit, toUnit) => {
          // Erst zu Meter pro Sekunde konvertieren
          let metersPerSecond;
          switch (fromUnit) {
              case "Kilometer per hour":
              metersPerSecond = value / 3.6;
              break;
              case "Meter per second":
              metersPerSecond = value;
              break;
              case "Mile per hour":
              metersPerSecond = value * 0.44704;
              break;
              case "Foot per second":
              metersPerSecond = value * 0.3048;
              break;
              default:
              return 0;
          }
        
          // Dann von Meter pro Sekunde zur Zieleinheit
          switch (toUnit) {
              case "Kilometer per hour":
              return metersPerSecond * 3.6;
              case "Meter per second":
              return metersPerSecond;
              case "Mile per hour":
              return metersPerSecond / 0.44704;
              case "Foot per second":
              return metersPerSecond / 0.3048;
              default:
              return 0;
          }
      }
    // Weitere Kategorien hier...
  },
    time: {
        units: ["Second", "Minute", "Hour", "Day"],
        convert: (value, fromUnit, toUnit) => {
            // Erst zu Sekunden konvertieren
            let seconds;
            switch (fromUnit) {
                case "Second":
                    seconds = value;
                    break;
                case "Minute":
                    seconds = value * 60;
                    break;
                case "Hour":
                    seconds = value * 3600;
                    break;
                case "Day":
                    seconds = value * 86400;
                    break;
                default:
                    return 0;
            }
            
            // Dann von Sekunden zur Zieleinheit
            switch (toUnit) {
                case "Second":
                    return seconds;
                case "Minute":
                    return seconds / 60;
                case "Hour":
                    return seconds / 3600;
                case "Day":
                    return seconds / 86400;
                default:
                    return 0;
            }
        }
    }
};

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("temperature");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value && fromUnit && toUnit) {
      const converted = UNIT_TYPES[selectedCategory].convert(
        parseFloat(value),
        fromUnit,
        toUnit
      );
      setResult(Number(converted).toFixed(2));
    }
  };

  const handleUnitChange = (e, setter) => {
    const value = e.target.value;
    setter(value);

    if (inputValue && fromUnit && toUnit) {
      const converted = UNIT_TYPES[selectedCategory].convert(
        parseFloat(inputValue),
        fromUnit === "" ? value : fromUnit,
        toUnit === "" ? value : toUnit
      );
      setResult(Number(converted).toFixed(2));
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setFromUnit("");
    setToUnit("");
    setResult("");
  };

  const handleReset = () => {
    setInputValue("");
    setResult("");
    setFromUnit("");
    setToUnit("");
  };

  return (
    <div className="mx-auto mt-64 max-w-sm rounded-lg border-[1px] border-gray-300 bg-gray-100 p-6 shadow-md dark:border-gray-400 dark:bg-gray-800">
      <h1 className="mb-4 text-center text-xl font-bold text-gray-800 dark:text-gray-200">
        Unit Converter
      </h1>

      {/* Kategorie-Auswahl */}
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full rounded-md bg-gray-200 px-3 py-2 dark:bg-gray-700 dark:text-gray-300"
        >
          <option value="temperature">Temperature</option>
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="area">Area</option>
          <option value="volume">Volume</option>
          <option value="speed">Speed</option>
          <option value="time">Time</option>
        </select>
      </div>

      {/* Eingabefeld */}
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
          Value
        </label>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter value"
          className="w-full rounded-md bg-gray-200 px-3 py-2 dark:bg-gray-700 dark:text-gray-200"
        />
      </div>

      {/* Von-Einheit */}
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
          From Unit
        </label>
        <select
          value={fromUnit}
          onChange={(e) => handleUnitChange(e, setFromUnit)}
          className="w-full rounded-md bg-gray-200 px-3 py-2 dark:bg-gray-700 dark:text-gray-300"
        >
          <option value="">Select unit</option>
          {UNIT_TYPES[selectedCategory]?.units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      {/* Zu-Einheit */}
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
          To Unit
        </label>
        <select
          value={toUnit}
          onChange={(e) => handleUnitChange(e, setToUnit)}
          className="w-full rounded-md bg-gray-200 px-3 py-2 dark:bg-gray-700 dark:text-gray-300"
        >
          <option value="">Select unit</option>
          {UNIT_TYPES[selectedCategory]?.units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      {/* Ergebnis */}
      <div className="mb-4 text-center">
        <p className="text-lg font-bold dark:text-gray-300">Result: {result}</p>
      </div>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="w-full rounded-md bg-red-600 px-4 py-2 text-white"
      >
        Reset
      </button>
    </div>
  );
};

export default UnitConverter;