import { Autocomplete } from 'ndui-ahrom';
import React, { useState } from 'react';

interface Option {
  label: string;
  value: string;
}

const AutocompleteTestPage: React.FC = () => {
  const options: Option[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'grape', label: 'Grape' },
    { value: 'orange', label: 'Orange' },
  ];

  const [singleValue, setSingleValue] = useState<Option | null>(null);
  const [multiValue, setMultiValue] = useState<Option[]>([]); // 🔥 مقداردهی صحیح
  const [errorValue, setErrorValue] = useState<Option | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="tw-container tw-mx-auto tw-p-6">
      <h1 className="tw-text-2xl tw-font-bold tw-mb-4">Autocomplete Test</h1>

      {/* حالت تک‌انتخابی */}
      <div className="tw-mb-6">
        <h2 className="tw-text-lg tw-font-semibold tw-mb-2">Single Select</h2>
        <Autocomplete
          options={options}
          value={singleValue}
          onChange={setSingleValue}
          label="Select a Fruit"
        />
      </div>

      {/* حالت چندانتخابی */}
      <div className="tw-mb-6">
        <h2 className="tw-text-lg tw-font-semibold tw-mb-2">Multi Select</h2>
        <Autocomplete
          options={options}
          value={multiValue}
          onChange={setMultiValue}
          isMulti
          label="Select Multiple Fruits"
        />
      </div>

      {/* حالت بدون گزینه */}
      <div className="tw-mb-6">
        <h2 className="tw-text-lg tw-font-semibold tw-mb-2">Empty Options</h2>
        <Autocomplete options={[]} value={null} onChange={() => {}} label="No Options Available" />
      </div>

      {/* حالت غیرفعال */}
      <div className="tw-mb-6">
        <h2 className="tw-text-lg tw-font-semibold tw-mb-2">Disabled</h2>
        <Autocomplete
          options={options}
          value={null}
          onChange={() => {}}
          label="Disabled Select"
          className="tw-opacity-50"
          isLoading
        />
      </div>

      {/* حالت بارگذاری */}
      <div className="tw-mb-6">
        <h2 className="tw-text-lg tw-font-semibold tw-mb-2">Loading</h2>
        <Autocomplete
          options={options}
          value={null}
          onChange={() => {}}
          label="Loading State"
          isLoading
        />
      </div>

      {/* حالت خطا */}
      <div className="tw-mb-6">
        <h2 className="tw-text-lg tw-font-semibold tw-mb-2">Error State</h2>
        <Autocomplete
          options={options}
          value={errorValue}
          onChange={setErrorValue}
          label="Select with Error"
          error="This field is required."
        />
      </div>

      {/* نمایش مقدار انتخاب‌شده */}
      <div className="tw-mt-6 tw-p-4 tw-border tw-rounded-lg">
        <h2 className="tw-text-lg tw-font-semibold">Selected Values:</h2>
        <p className="tw-text-primary tw-font-medium">Single: {singleValue?.label || 'None'}</p>
        <p className="tw-text-primary tw-font-medium">
          Multi: {multiValue.length > 0 ? multiValue.map((v) => v.label).join(', ') : 'None'}
        </p>
      </div>
    </div>
  );
};

export default AutocompleteTestPage;
