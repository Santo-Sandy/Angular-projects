import { Component } from '@angular/core';
import { Node, Route, SupplyChainPath, SupplyChains } from '../supply-chains';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supply-chain',
  imports: [CommonModule],
  templateUrl: './supply-chain.html',
  styleUrl: './supply-chain.css',
})
export class SupplyChain {

  nodes: Node[] = [];
  routes: Route[] = [];
  allPaths: SupplyChainPath[] = [];
  selectedPath: SupplyChainPath | null = null;
  selectedStore: Node | null = null;
  filteredPaths: SupplyChainPath[] = [];

  viewMode: 'all' | 'by-store' | 'single-path' = 'all';
  ;

  constructor(private supplyChainService: SupplyChains) {}

  ngOnInit(): void {
    this.supplyChainService.nodes$.subscribe(nodes => {
      this.nodes = nodes;
    });

    this.supplyChainService.routes$.subscribe(routes => {
      this.routes = routes;
    });

    this.supplyChainService.paths$.subscribe(paths => {
      this.allPaths = paths;
      this.filteredPaths = paths;
    });
  }

  getNodesByType(type: Node['type']): Node[] {
    return this.nodes.filter(n => n.type === type);
  }

  selectStore(store: Node): void {
    this.selectedStore = store;
    this.viewMode = 'by-store';
    this.filteredPaths = this.supplyChainService.getPathsForStore(store.id);
    this.selectedPath = null;
  }

  selectPath(path: SupplyChainPath): void {
    this.selectedPath = path;
    this.viewMode = 'single-path';
  }

  showAllPaths(): void {
    this.viewMode = 'all';
    this.selectedStore = null;
    this.selectedPath = null;
    this.filteredPaths = this.allPaths;
  }

  getNodeTypeClass(type: Node['type']): string {
    const classes = {
      supplier: 'node-supplier',
      hub: 'node-hub',
      depot: 'node-depot',
      store: 'node-store'
    };
    return classes[type];
  }

  getRouteStatusClass(status: Route['status']): string {
    const classes = {
      active: 'route-active',
      inactive: 'route-inactive',
      congested: 'route-congested'
    };
    return classes[status];
  }

  getRouteForNodes(fromId: string, toId: string): Route | undefined {
    return this.routes.find(r => r.from === fromId && r.to === toId);
  }


}
