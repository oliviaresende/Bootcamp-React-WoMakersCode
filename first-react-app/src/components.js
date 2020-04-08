import React from "react";
import { products } from "./mock";

export class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }
    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        });
    }

    render() {
        console.log(products);

        return (<div>
            <SearchBar
                filterText={this.setState.filterText}
                inStockOnly={this.setState.inStockOnly}
                onFilterTextChange={this.handleFilterTextChange}
                onInStockChange={this.handleInStockChange}
            />
            <ProductTable
                products={products}
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
            />

        </div>
        )
    }
}
class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value);
    }
    handleInStockChange(e){
        this.props.onInStockChange(e.target.checked)
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <br></br>
                <input 
                    type="checkbox" 
                    htmlFor="checkbox"
                    checked={this.props.inStockOnly}
                    onChange={this.handleInStockChange}
                />
                <label className="checkbox" id="checkbox">Somente produtos em estoque.</label>
            </div>
        )
    }
}
class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        categoryRow={product.category}
                        key={product.category}
                    />
                );
            }
            rows.push(<ProductRow productRow={product} key={product.name} />);
            lastCategory = product.category;
            console.log(product);

        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}
const ProductRow = props => (
    <tr>
        <td style={{ color: !props.productRow.stocked ? 'red' : 'black' }}>{props.productRow.name}</td>
        <td>{props.productRow.price}</td>
    </tr>
)
const ProductCategoryRow = props => (
    <tr>
        <th colSpan="2">
            {props.categoryRow}
        </th>
    </tr>
)