import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface AppContainerType {
  containerStyle: string;
}

export interface InfoDetail {
  title: string;
  background: string;
  buttonText: string;
  buttonTextTwo: string;
}

export interface BenefitCardType {
  title: string;
  description: string;
  cardIcon: IconDefinition;
}

export interface ServiceCardType {
  img: string;
  title: string;
  description: string;
}