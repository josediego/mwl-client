"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { ToggleSwitch } from "../components/eligibility/ToggleSwitch";

import moment from "moment";
import { states } from "@/utils";

interface FormData {
  dateOfBirth: string;
  sex: string;
  feets: string;
  inches: string;
  cm: string;
  pounds: string;
  kg: string;
  state: string;
  termsAccepted: boolean;
}
export default function Eligibility() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    dateOfBirth: "",
    sex: "Male",
    feets: "",
    inches: "",
    cm: "",
    pounds: "",
    kg: "",
    state: "",
    termsAccepted: false,
  });

  const [heightUnit, setHeightUnit] = useState<"in" | "cm">("in");
  const [weightUnit, setWeightUnit] = useState<"lb" | "kg">("lb");

  const MAX_DATE_OF_BIRTH = moment().subtract(18, "years").format("YYYY-MM-DD");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value, checked } = e.target as any;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/check-eligibility", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.assign({}, formData, { heightUnit, weightUnit })),
    });

    if (response.ok) {
      // alert("Form submitted successfully!");
      console.log("Form submitted successfully!");
    } else {
      router.push("/get-started/sorry");
    }
  };

  return (
    <div className="w-6/12">
      <h2 className="font-semibold text-[#242424] text-[40px] mb-4">
        Check your eligibility
      </h2>
      <div className="mb-[30px]">
        <p className="text-[#242424] mb-4">What is your dare of birth?</p>
        <div className="input-wrapper w-full">
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            className="input-field placeholder-transparent"
            placeholder=""
            max={MAX_DATE_OF_BIRTH}
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          <label htmlFor="dateOfBirth" className="input-label">
            Date
          </label>
        </div>
      </div>
      <div className="mb-[30px]">
        <p className="text-[#242424] mb-4">
          What is your sex assigned at birth?
        </p>
        <div className="input-wrapper w-full">
          <select
            id="Selection"
            name="sex"
            className="input-field placeholder-transparent"
            value={formData.sex}
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="Selection" className="input-label">
            Selection
          </label>
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[#242424]">What is your height?</p>
          <ToggleSwitch
            options={["in", "cm"]}
            initialValue="in"
            onChange={setHeightUnit}
          />
        </div>
        <div className="flex items-center gap-5">
          {heightUnit === "in" ? (
            <>
              <div className="input-wrapper w-full">
                <input
                  type="text"
                  id="feets"
                  name="feets"
                  className="input-field placeholder-transparent"
                  value={formData.feets}
                  onChange={handleChange}
                  placeholder=""
                  required
                />
                <label htmlFor="feets" className="input-label">
                  Feets
                </label>
              </div>
              <div className="input-wrapper w-full">
                <input
                  type="text"
                  id="inches"
                  name="inches"
                  className="input-field placeholder-transparent"
                  value={formData.inches}
                  onChange={handleChange}
                  placeholder=""
                  required
                />
                <label htmlFor="inches" className="input-label">
                  Inches
                </label>
              </div>
            </>
          ) : (
            <div className="input-wrapper w-full">
              <input
                type="text"
                id="cm"
                name="cm"
                className="input-field placeholder-transparent"
                value={formData.cm}
                onChange={handleChange}
                placeholder=""
                required
              />
              <label htmlFor="cm" className="input-label">
                Cm
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[#242424]">What is your weight?</p>
          <ToggleSwitch
            options={["lb", "kg"]}
            initialValue="lb"
            onChange={setWeightUnit}
          />
        </div>
        {weightUnit === "lb" ? (
          <div className="input-wrapper w-full">
            <input
              type="number"
              id="pounds"
              name="pounds"
              className="input-field placeholder-transparent"
              value={formData.pounds}
              onChange={handleChange}
              placeholder=""
              required
            />
            <label htmlFor="pounds" className="input-label">
              Pounds
            </label>
          </div>
        ) : (
          <div className="input-wrapper w-full">
            <input
              type="number"
              id="kg"
              name="kg"
              className="input-field placeholder-transparent"
              value={formData.kg}
              onChange={handleChange}
              placeholder=""
              required
            />
            <label htmlFor="kg" className="input-label">
              Kg
            </label>
          </div>
        )}
      </div>
      <div className="mb-[30px]">
        <p className="text-[#242424] mb-4">Where are you located?</p>
        <div className="input-wrapper w-full">
          <select
            id="state"
            name="state"
            className="input-field placeholder-transparent"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select one</option>
            {states.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          <label htmlFor="state" className="input-label">
            State
          </label>
        </div>
      </div>
      <div className="mb-10">
        <div className="bg-[#E3E3E3] py-5 px-4 rounded-lg">
          <div className="box-check">
            <input
              className="box-check-input"
              id="termsAccepted"
              name="termsAccepted"
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label
              className="box-check-label text-[12px]"
              htmlFor="termsAccepted"
            >
              <span>
                I have read the
                <a href="#" className="mx-[2px] underline font-semibold">
                  Disclaimer, information, and advertising notice
                </a>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="border border-[#242424] flex items-center justify-center h-[40px] rounded-[40px] bg-[#F4F4F4] w-[144px] hover:bg-[#242424] hover:text-[#F4F4F4]">
          <span className="text-sm font-semibold">Cancel</span>
        </button>
        <span className="font-medium text-[#8D8D8D]">Step 1 of 3</span>
        <button
          className="border border-[#242424] bg-[#242424] flex items-center justify-center h-[40px] rounded-[40px] w-[144px] text-[#F4F4F4] hover:bg-[#111111] disabled:bg-slate-200 disabled:text-slate-400 disabled:border-slate-200 transition"
          disabled={!formData.termsAccepted}
          onClick={handleSubmit}
        >
          <span className="text-sm font-semibold">Next</span>
        </button>
      </div>
    </div>
  );
}
