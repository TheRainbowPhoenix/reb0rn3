/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    user: {
      name: string;
    };
    cms: any;
    welcomeTitle: () => string;
    orders: Map<string, object>;
  }
}
