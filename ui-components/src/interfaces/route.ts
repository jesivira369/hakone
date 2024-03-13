import React from 'react';

export interface IRoute {
  path: string;
  name: string;
  component: React.ElementType;
  layout?: React.ComponentType;
  routes?: IRoute[];
  guard?: React.ComponentType;
}
