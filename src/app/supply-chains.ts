import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Node {
  id: string;
  name: string;
  type: 'supplier' | 'hub' | 'depot' | 'store';
  location: string;
  contact: string;
  capacity?: string;
  coordinates?: { lat: number; lng: number };
}

export interface Route {
  id: string;
  from: string; // Node ID
  to: string;   // Node ID
  distance: string;
  duration: string;
  cost: number;
  status: 'active' | 'inactive' | 'congested';
}

export interface SupplyChainPath {
  id: string;
  name: string;
  nodes: Node[];
  routes: Route[];
  totalDistance: string;
  totalDuration: string;
  totalCost: number;
  efficiency: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  quantity: number;
  currentPath?: string; // SupplyChainPath ID
}


@Injectable({
  providedIn: 'root',
})
export class SupplyChains {

  nodesSubject = new BehaviorSubject<Node[]>([]);
  routesSubject = new BehaviorSubject<Route[]>([]);
  pathsSubject = new BehaviorSubject<SupplyChainPath[]>([]);

  nodes$ = this.nodesSubject.asObservable();
  routes$ = this.routesSubject.asObservable();
  paths$ = this.pathsSubject.asObservable();

  constructor() {
    this.initializeSampleData();
  }

  private initializeSampleData(): void {
    // Sample Nodes
    const nodes: Node[] = [
      // Suppliers
      {
        id: 'SUP-001',
        name: 'Global Electronics Supplier',
        type: 'supplier',
        location: 'Shanghai, China',
        contact: '+86 21 1234 5678',
        capacity: '100,000 units/month'
      },
      {
        id: 'SUP-002',
        name: 'Tech Components Inc',
        type: 'supplier',
        location: 'Shenzhen, China',
        contact: '+86 755 8765 4321',
        capacity: '80,000 units/month'
      },
      // Hubs
      {
        id: 'HUB-001',
        name: 'Asia Pacific Distribution Hub',
        type: 'hub',
        location: 'Singapore',
        contact: '+65 6123 4567',
        capacity: '500,000 units'
      },
      {
        id: 'HUB-002',
        name: 'Central Logistics Hub',
        type: 'hub',
        location: 'Hong Kong',
        contact: '+852 2345 6789',
        capacity: '400,000 units'
      },
      // Depots
      {
        id: 'DEP-001',
        name: 'North Regional Depot',
        type: 'depot',
        location: 'Delhi, India',
        contact: '+91 11 2345 6789',
        capacity: '50,000 units'
      },
      {
        id: 'DEP-002',
        name: 'South Regional Depot',
        type: 'depot',
        location: 'Bangalore, India',
        contact: '+91 80 8765 4321',
        capacity: '45,000 units'
      },
      {
        id: 'DEP-003',
        name: 'West Regional Depot',
        type: 'depot',
        location: 'Mumbai, India',
        contact: '+91 22 1234 5678',
        capacity: '60,000 units'
      },
      // Stores
      {
        id: 'STORE-001',
        name: 'Downtown Retail Store',
        type: 'store',
        location: 'Connaught Place, Delhi',
        contact: '+91 11 9876 5432',
        capacity: '5,000 units'
      },
      {
        id: 'STORE-002',
        name: 'Tech Mall Store',
        type: 'store',
        location: 'MG Road, Bangalore',
        contact: '+91 80 1234 5678',
        capacity: '4,500 units'
      },
      {
        id: 'STORE-003',
        name: 'Phoenix Market Store',
        type: 'store',
        location: 'Lower Parel, Mumbai',
        contact: '+91 22 8765 4321',
        capacity: '6,000 units'
      }
    ];

    // Sample Routes
    const routes: Route[] = [
      // Supplier to Hub routes
      {
        id: 'R-001',
        from: 'SUP-001',
        to: 'HUB-001',
        distance: '4,200 km',
        duration: '5 days',
        cost: 15000,
        status: 'active'
      },
      {
        id: 'R-002',
        from: 'SUP-001',
        to: 'HUB-002',
        distance: '3,800 km',
        duration: '4 days',
        cost: 13000,
        status: 'active'
      },
      {
        id: 'R-003',
        from: 'SUP-002',
        to: 'HUB-001',
        distance: '4,000 km',
        duration: '5 days',
        cost: 14500,
        status: 'active'
      },
      {
        id: 'R-004',
        from: 'SUP-002',
        to: 'HUB-002',
        distance: '3,600 km',
        duration: '4 days',
        cost: 12500,
        status: 'congested'
      },
      // Hub to Depot routes
      {
        id: 'R-005',
        from: 'HUB-001',
        to: 'DEP-001',
        distance: '4,100 km',
        duration: '6 days',
        cost: 18000,
        status: 'active'
      },
      {
        id: 'R-006',
        from: 'HUB-001',
        to: 'DEP-002',
        distance: '4,300 km',
        duration: '7 days',
        cost: 19000,
        status: 'active'
      },
      {
        id: 'R-007',
        from: 'HUB-001',
        to: 'DEP-003',
        distance: '4,500 km',
        duration: '7 days',
        cost: 20000,
        status: 'active'
      },
      {
        id: 'R-008',
        from: 'HUB-002',
        to: 'DEP-001',
        distance: '3,900 km',
        duration: '6 days',
        cost: 17000,
        status: 'active'
      },
      {
        id: 'R-009',
        from: 'HUB-002',
        to: 'DEP-002',
        distance: '4,100 km',
        duration: '6 days',
        cost: 18500,
        status: 'active'
      },
      {
        id: 'R-010',
        from: 'HUB-002',
        to: 'DEP-003',
        distance: '4,300 km',
        duration: '7 days',
        cost: 19500,
        status: 'active'
      },
      // Depot to Store routes
      {
        id: 'R-011',
        from: 'DEP-001',
        to: 'STORE-001',
        distance: '15 km',
        duration: '2 hours',
        cost: 500,
        status: 'active'
      },
      {
        id: 'R-012',
        from: 'DEP-002',
        to: 'STORE-002',
        distance: '12 km',
        duration: '1.5 hours',
        cost: 400,
        status: 'active'
      },
      {
        id: 'R-013',
        from: 'DEP-003',
        to: 'STORE-003',
        distance: '18 km',
        duration: '2.5 hours',
        cost: 600,
        status: 'active'
      },
      // Cross-depot to store routes (alternative paths)
      {
        id: 'R-014',
        from: 'DEP-001',
        to: 'STORE-002',
        distance: '2,100 km',
        duration: '3 days',
        cost: 8000,
        status: 'active'
      },
      {
        id: 'R-015',
        from: 'DEP-002',
        to: 'STORE-001',
        distance: '2,150 km',
        duration: '3 days',
        cost: 8200,
        status: 'inactive'
      }
    ];

    this.nodesSubject.next(nodes);
    this.routesSubject.next(routes);
    this.generatePaths(nodes, routes);
  }

  private generatePaths(nodes: Node[], routes: Route[]): void {
    const paths: SupplyChainPath[] = [];

    // Generate all possible paths from suppliers to stores
    const suppliers = nodes.filter(n => n.type === 'supplier');
    const stores = nodes.filter(n => n.type === 'store');

    suppliers.forEach(supplier => {
      stores.forEach(store => {
        // Find all possible paths using BFS/DFS
        const possiblePaths = this.findAllPaths(supplier.id, store.id, routes, nodes);
        paths.push(...possiblePaths);
      });
    });

    this.pathsSubject.next(paths);
  }

  private findAllPaths(
    startId: string,
    endId: string,
    routes: Route[],
    nodes: Node[]
  ): SupplyChainPath[] {
    const paths: SupplyChainPath[] = [];
    const visited = new Set<string>();

    const dfs = (
      currentId: string,
      targetId: string,
      currentPath: string[],
      currentRoutes: Route[],
      totalCost: number
    ) => {
      if (currentId === targetId) {
        // Create a complete path
        const pathNodes = currentPath.map(id => nodes.find(n => n.id === id)!);
        const totalDistance = this.calculateTotalDistance(currentRoutes);
        const totalDuration = this.calculateTotalDuration(currentRoutes);
        
        paths.push({
          id: `PATH-${paths.length + 1}`,
          name: `${pathNodes[0].name} → ${pathNodes[pathNodes.length - 1].name}`,
          nodes: pathNodes,
          routes: currentRoutes,
          totalDistance,
          totalDuration,
          totalCost,
          efficiency: this.calculateEfficiency(totalCost, currentRoutes.length)
        });
        return;
      }

      visited.add(currentId);

      // Find all routes from current node
      const nextRoutes = routes.filter(r => r.from === currentId && r.status === 'active');

      for (const route of nextRoutes) {
        if (!visited.has(route.to)) {
          dfs(
            route.to,
            targetId,
            [...currentPath, route.to],
            [...currentRoutes, route],
            totalCost + route.cost
          );
        }
      }

      visited.delete(currentId);
    };

    dfs(startId, endId, [startId], [], 0);
    return paths;
  }

  private calculateTotalDistance(routes: Route[]): string {
    // Simple calculation - would need proper conversion in production
    return routes.map(r => r.distance).join(' + ');
  }

  private calculateTotalDuration(routes: Route[]): string {
    // Simple calculation - would need proper conversion in production
    return routes.map(r => r.duration).join(' + ');
  }

  private calculateEfficiency(cost: number, hops: number): number {
    // Simple efficiency metric (lower is better)
    return Math.round((cost / hops) / 100);
  }

  // Public methods for component usage
  getNodeById(id: string): Node | undefined {
    return this.nodesSubject.value.find(n => n.id === id);
  }

  getRoutesBetween(fromId: string, toId: string): Route[] {
    return this.routesSubject.value.filter(r => r.from === fromId && r.to === toId);
  }

  getPathsForStore(storeId: string): SupplyChainPath[] {
    return this.pathsSubject.value.filter(p => 
      p.nodes[p.nodes.length - 1].id === storeId
    );
  }

  getAllPaths(): SupplyChainPath[] {
    return this.pathsSubject.value;
  }

  addRoute(route: Route): void {
    const routes = [...this.routesSubject.value, route];
    this.routesSubject.next(routes);
    this.generatePaths(this.nodesSubject.value, routes);
  }

  updateRouteStatus(routeId: string, status: Route['status']): void {
    const routes = this.routesSubject.value.map(r => 
      r.id === routeId ? { ...r, status } : r
    );
    this.routesSubject.next(routes);
    this.generatePaths(this.nodesSubject.value, routes);
  }
}
