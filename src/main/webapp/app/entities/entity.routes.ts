import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'region',
    data: { pageTitle: 'microApp.microRegion.home.title' },
    loadChildren: () => import('./micro/region/region.routes'),
  },
  {
    path: 'country',
    data: { pageTitle: 'microApp.microCountry.home.title' },
    loadChildren: () => import('./micro/country/country.routes'),
  },
  {
    path: 'location',
    data: { pageTitle: 'microApp.microLocation.home.title' },
    loadChildren: () => import('./micro/location/location.routes'),
  },
  {
    path: 'department',
    data: { pageTitle: 'microApp.microDepartment.home.title' },
    loadChildren: () => import('./micro/department/department.routes'),
  },
  {
    path: 'task',
    data: { pageTitle: 'microApp.microTask.home.title' },
    loadChildren: () => import('./micro/task/task.routes'),
  },
  {
    path: 'employee',
    data: { pageTitle: 'microApp.microEmployee.home.title' },
    loadChildren: () => import('./micro/employee/employee.routes'),
  },
  {
    path: 'job',
    data: { pageTitle: 'microApp.microJob.home.title' },
    loadChildren: () => import('./micro/job/job.routes'),
  },
  {
    path: 'job-history',
    data: { pageTitle: 'microApp.microJobHistory.home.title' },
    loadChildren: () => import('./micro/job-history/job-history.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
