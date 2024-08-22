import { NextResponse } from "next/server";
import { Failure, Success } from "../response";
import moment from "moment";

export async function POST(request: Request) {
  const data = await request.json();

  const validAge = moment().diff(moment(data.dateOfBirth, "YYYY-MM-DD"), "years") > 18;
  const validState = !["MS", "LA"].includes(data.state);

  const validBMI = validateBMI(data)

  if (!validAge || !validState || !validBMI) {
    return NextResponse.json(Failure("Not eligible"), { status: 400 });
  }

  return NextResponse.json(Success(data));
}

function validateBMI(data: any) {
  const { heightUnit, feets, inches, cm, weightUnit, kg, pounds } = data;

  const finalKG = weightUnit === "lb" ? pounds * 0.453592 : kg;
  const finalMeters = heightUnit === "in" ? Number(feets + "." + inches) * 0.3048 * 2.54 : cm / 100;

  const BMI = finalKG / (finalMeters * finalMeters);

  return BMI > 27;
}